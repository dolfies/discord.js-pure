// JAVASCRIPT START.

/* globals & funcs stuff */
function client() {} // ez way to get ez funcs like client.send_message(), etc

client.get_token = function() {
    if (window.localStorage != undefined){
      console.log("[discordjs-pure] localStorage token is there! attempting to grab it...");
      let GLOBAL_USER_TOKEN = window.localStorage.getItem('token').replace("\"", "").replace("\"", "");
      console.log(`[discordjs-pure] token grab success! token is ${GLOBAL_USER_TOKEN}! returning now...`);
      return GLOBAL_USER_TOKEN;
    }
    else {
        console.log("[discordjs-pure] localStorage token isn't present... opening a window to grab the token!")
        let popup;
        popup = window.open('');
        if (!popup) return alert("[discordjs-pure] the popup required to grab the token was blocked! allow popups or this won't work... after you allow popups, reload this page and re-paste this script");
        popup.document.write("Getting token...");
        window.dispatchEvent(new Event('beforeunload'));
        window.tkn = JSON.parse(popup.localStorage.token);
        popup.close();
        let GLOBAL_USER_TOKEN = window.tkn;
        console.log(`[discordjs-pure] token grab success! token is ${GLOBAL_USER_TOKEN}! returning now...`);
        return GLOBAL_USER_TOKEN;
    }
    
}

client.get_userid = function(GLOBAL_USER_TOKEN) {
  if (GLOBAL_USER_TOKEN.includes('mfa.')){
    console.warn("[discordjs-pure] the current user is an mfa one. aborting userid fetch!");
    alert("[discordjs-pure] note: you have 2fa on; the selfbot likely won't respond!");
    return GLOBAL_USER_TOKEN;
  }
  else {
    let USERID = atob(GLOBAL_USER_TOKEN.split('.')[0]);
    return USERID;
  }
}

client.send_message = function(message, chan_id, token) { // send message func, very ez
    if (!token) {
        console.warn("[discordjs-pure] no token was provided. aborting message send!");
    }
    if (!message) {
        console.warn("[discordjs-pure] no message was specified, aborting message send!");
    }
    if (!chan_id) {
        console.warn("[discordjs-pure] no channel id was specified, aborting message send!");
    }
    if (token && message && chan_id) {
        let post_url = `https://discord.com/api/v9/channels/${chan_id}/messages`;
        let request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open("POST", post_url);
        request.setRequestHeader("authorization", token);
        request.setRequestHeader("accept", "/");
        request.setRequestHeader("authority", "discordapp.com");
        request.setRequestHeader("content-type", "application/json");
        request.send(JSON.stringify({
            content: message
        }));
    } else {
        console.warn("[discordjs-pure] message send aborted!");
    }

}

client.delete_message = function(msg, token) { // send message func, very ez
    var chid = msg.channel_id;
    var msgid = msg.id;
    if (!token) {
        console.warn("[discordjs-pure] no token was provided. aborting message del!");
    }
    if (!msg) {
        console.warn("[discordjs-pure] no message was specified, aborting message del!");
    }
    if (token && msg) {
        let del_url = `https://discord.com/api/v9/channels/${chid}/messages/${msgid}`;
        let request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open("DELETE", del_url);
        request.setRequestHeader("authorization", token);
        request.setRequestHeader("accept", "/");
        request.setRequestHeader("authority", "discordapp.com");
        request.setRequestHeader("content-type", "application/json");
        request.send(null);
    } else {
        console.warn("[discordjs-pure] message del aborted!");
    }

}

client.run = function(GLOBAL_USER_TOKEN) {
    var ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");
    var interval = 0;

    payload = {
        op: 2,
        d: {
            token: GLOBAL_USER_TOKEN,
            intents: 512,
            properties: {
                $os: "linux",
                $browser: "chrome",
                $device: "chrome",
            },
        },
    };

    ws.addEventListener("open", function open(x) {
        ws.send(JSON.stringify(payload));
    });

    ws.addEventListener("message", function incomming(data) {
        var x = data.data;
        var payload = JSON.parse(x);

        const {
            t,
            event,
            op,
            d
        } = payload;

        switch (op) {
            // OPCODE 10 GIVES the HEARTBEAT INTERVAL, SO YOU CAN KEEP THE CONNECTION ALIVE
            case 10:
                const {
                    heartbeat_interval
                } = d;
                setInterval(() => {
                    ws.send(JSON.stringify({
                        op: 2,
                        d: null
                    }));
                }, heartbeat_interval);

                break;
        }

        switch (t) {
            // IF MESSAGE IS CREATED, IT WILL LOG IN THE CONSOLE
            case "MESSAGE_CREATE":
                client.on_message(d, GLOBAL_USER_TOKEN);
        }
    });

    console.clear();
    console.log("attempted to log in!");
    
}

console.clear();
console.log("attempted to inject discord.js-pure.js! test it out by pasting one of the examples from https://github.com/13-05/discord.js-pure/tree/main/examples");