let KEEPLOGS=null;
var Discord = {
    library_event_logging: {
      true: function(){
        KEEPLOGS = true;
      },
      false: function(){
        KEEPLOGS = false;
        console.clear();
      },
      get_value: function(){
        return KEEPLOGS;
      }
    },
    experimental: {
      staff_mode: {
        enable: function(){
          Object.defineProperty((webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.isDeveloper!==void 0).exports.default,"isDeveloper",{get:()=>true, configurable:true});
        },
        disable: function(){
          Object.defineProperty((webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.isDeveloper!==void 0).exports.default,"isDeveloper",{get:()=>false, configurable:true}); 
        }
      },

      nsfw_allowed: {
        enable: function(){
        var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
        findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true;
        },
        disable: function(){
          var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
          findModule('getCurrentUser').getCurrentUser().nsfwAllowed = false;
        }
      },

      amoled_dark_mode: {
        enable: function(){
          var css = `:root{--background-primary:black;--background-secondary:rgb(20, 20, 20);--background-secondary-alt:rgb(28, 28, 28);--background-tertiary:rgb(10, 10, 10);--background-floating:rgb(12, 12, 12);--background-accent:var(--background-secondary-alt);--channeltextarea-background:rgb(15, 15, 15);--searcharea-background:var(--background-secondary);--channels-default:#8b8b8b;--header-primary:#fff;--header-secondary:#b9bbbe;--text-normal:#dcddde;--text-muted:#969696;--scroller-thumb:rgb(30, 30, 30);--scroller-track:rgb(10, 10, 10);--background-modifier-rgb:60, 60, 60;--background-modifier-hover:rgba(var(--background-modifier-rgb), 0.16);--background-modifier-active:rgba(var(--background-modifier-rgb), 0.24);--background-modifier-selected:rgba(var(--background-modifier-rgb), 0.32);--background-modifier-accent:rgba(255, 255, 255, 0.06);--interactive-muted:rgb(75, 75, 75);--elevation-low:0 1px 0 rgba(40, 40, 50, 0.2), 0 1.5px 0 rgba(60, 60, 70, 0.05), 0 2px 0 rgba(40, 40, 50, 0.05);--elevation-high:0 8px 16px rgba(0, 0, 0, 0.24)}#app-mount .layer-86YKbF .cardFolder-3H4uH4{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .group-LWHoGI{border-color:var(--background-tertiary)}#app-mount .layer-86YKbF .item-4m-12I[aria-checked=false]{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .passthrough--fbdFR.selected-3jieYB{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .avatarUploaderInnerSquareDisabled-e_U2MZ{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .container-3EtAkD{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .container-3EtAkD:hover{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .container-3EtAkD:hover .icon-2DGsye{background-color:var(--background-dark)}#app-mount .layer-86YKbF .icon-2DGsye{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .primary-38Hs-h:hover:not(.disabled-184-il),#app-mount .layer-86YKbF .secondary-2bzKEX{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .primary-38Hs-h:hover:not(.disabled-184-il):hover,#app-mount .layer-86YKbF .secondary-2bzKEX:hover{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .previewContainer-1GxmBJ{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .previewContainer-1xQAsw .theme-secondary{display:none}#app-mount .layer-86YKbF .previewContainer-1xQAsw .messageContainer-3a6gLR{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .tierHeaderLocked-30MLlO{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .tierBody-1d3UiS{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .auditLog-1NVAY0{border-color:var(--background-secondary)}#app-mount .layer-86YKbF .auditLog-1NVAY0:hover{border-color:var(--background-tertiary)}#app-mount .layer-86YKbF .auditLog-1NVAY0:hover .headerClickable-zGQJz3,#app-mount .layer-86YKbF .auditLog-1NVAY0:hover .headerExpanded-1-zwDr{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .headerClickable-zGQJz3,#app-mount .layer-86YKbF .headerDefault-1e6yjj,#app-mount .layer-86YKbF .headerExpanded-1-zwDr{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .divider-M3saWq{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .changeDetails-1kMZqI{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .descriptionBox-SKGNgB{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .featureCard-3XHbjy{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .featureIcon-2sTnDK{background-color:var(--background-tertiary)}.layer-86YKbF[aria-label$=SETTINGS] .input-2g-os5{border-color:var(--background-secondary);background-color:var(--background-tertiary)}#app-mount .contentRegion-3HkfJJ,#app-mount .contentRegionScroller-2_GT_N{background-color:var(--background-primary)}#app-mount .sidebarRegionScroller-FXiQOh{background-color:var(--background-primary)}#app-mount .header-6h98Y_,#app-mount .titleContainer-3fPic2{background-color:var(--background-primary)}#app-mount .closeButton-PCZcma{border-color:var(--background-secondary-alt)}#app-mount .closeButton-PCZcma:hover{background-color:var(--background-secondary-alt)}#app-mount .keybind-13vtq8{color:var(--text-normal)}#app-mount .scroller-3_YDR2{background-color:var(--background-primary)}#app-mount .card-2EUiNF,#app-mount .settingCard-xZSDjS{background-color:var(--background-secondary)}#app-mount .cardPrimary-3qRT__,#app-mount .cardPrimaryEditable-2mz_3i{border-color:var(--background-secondary);background-color:var(--background-secondary)}#app-mount .iconWrapper-lS1uig{background-color:var(--background-tertiary)}#app-mount .itemFilled-1cPbtg{background-color:var(--background-secondary-alt)}#app-mount .itemFilled-1cPbtg[aria-checked=true]{background-color:var(--background-tertiary) !important}#app-mount .itemFilled-1cPbtg:hover{background-color:var(--background-secondary)}#app-mount .detailsBlock-24pLFz{background-color:var(--background-secondary)}#app-mount .default-1Tkeeg{background-color:var(--background-secondary-alt)}#app-mount .premiumGuildAvailabilityIndicator-2yVVuW{background-color:var(--background-secondary-alt)}#app-mount .container-30qY7E{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .accountProfileCard-lbN7n-{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .accountProfileCard-lbN7n- .background-3d_SjE,#app-mount .layer-86YKbF .accountProfileCard-lbN7n- .fieldList-in8WkP{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .avatar-3mTjvZ{border-color:var(--background-tertiary);background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .profileBannerPreview-3mLIdO{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .cardPrimaryOutline-1ofwVz{border-color:var(--background-tertiary);background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .accountList-305sx3{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .accountBtn-1YkMgV .accountBtnInner-3XK70s{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .connection-107AGH,#app-mount .layer-86YKbF .guildSubscriptionSlots-1IKD1q{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .connectionHeader-2rV1ze,#app-mount .layer-86YKbF .guildHeader-p5Yoct{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .feature-2IUcBI,#app-mount .layer-86YKbF .subscriptionsRedirectContainer-zD3U79{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .outer-2JOHae{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .noIcon-3gSX9V{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .gemIndicatorContainer-PqApbX{background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .premiumSubscriptionAccountCredit-1UInYJ,#app-mount .layer-86YKbF .promotionCard-3bv1Uh{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .paginator-1eqD2g,#app-mount .layer-86YKbF .payment-2bOh4k,#app-mount .layer-86YKbF .paymentPane-ut5qKZ{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .bottomDivider-ZmTm-j{border-color:var(--background-primary)}#app-mount .layer-86YKbF .codeRedemptionRedirect-3SBiCp{border-color:var(--background-secondary);background-color:var(--background-tertiary)}#app-mount .layer-86YKbF .previewMessage-2uxBrA{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .notches-2w7UZJ.gray-3wP137{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg height='20' width='8' xmlns='http://www.w3.org/2000/svg' fill='black'%3E%3Cpath d='M0 0h8v20H0zm4 2a2 2 0 00-2 2v12a2 2 0 104 0V4a2 2 0 00-2-2z' fill-rule='evenodd'/%3E%3C/svg%3E")}#app-mount .layer-86YKbF .cameraWrapper-1hB0cM{border-color:var(--background-secondary);background-color:var(--background-secondary)}#app-mount .layer-86YKbF .notDetected-2HEmAp{background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .game-3x3aDt{-webkit-box-shadow:0 1px 0 0 var(--background-secondary-alt);box-shadow:0 1px 0 0 var(--background-secondary-alt)}#app-mount .layer-86YKbF .option-1QI4c9:not(.selected-18Wszc):not(:hover){background-color:var(--background-secondary-alt)}#app-mount .layer-86YKbF .powercord-entities-manage-tabs{background-color:var(--background-secondary)}#app-mount .layer-86YKbF .container-2oNtJn{background-color:var(--background-secondary)}#app-mount .button-1EGGcP .buttonColor-3bP3fX,#app-mount .button-1EGGcP.buttonColor-3bP3fX,#app-mount .lookFilled-yCfaCM.colorGrey-2iAG-B,#app-mount .lookFilled-yCfaCM.colorPrimary-2AuQVo{background-color:#282828}#app-mount .button-1EGGcP .buttonColor-3bP3fX:enabled:hover,#app-mount .button-1EGGcP.buttonColor-3bP3fX:enabled:hover,#app-mount .lookFilled-yCfaCM.colorGrey-2iAG-B:enabled:hover,#app-mount .lookFilled-yCfaCM.colorPrimary-2AuQVo:enabled:hover{background-color:#1e1e1e}#app-mount .container-2nx-BQ[style="opacity:1; background-color: hsl(218,calc(var(--saturation-factor,1) * 4.6%),46.9%);"]{background-color:#282828 !important}#app-mount .colorable-3rVGna.primaryDark-2UJt1G{background-color:#282828}.hljs-comment{color:#505050}.hljs-tag{color:#b0b0b0}.hljs-operator,.hljs-punctuation,.hljs-subst{color:#d0d0d0}.hljs-operator{opacity:0.7}.hljs-bullet,.hljs-deletion,.hljs-name,.hljs-selector-tag,.hljs-template-variable,.hljs-variable{color:#fb9fb1}.hljs-attr,.hljs-link,.hljs-literal,.hljs-number,.hljs-symbol,.hljs-variable.constant_{color:#eda987}.hljs-class .hljs-title,.hljs-title,.hljs-title.class_{color:#ddb26f}.hljs-strong{font-weight:bold;color:#ddb26f}.hljs-addition,.hljs-code,.hljs-string,.hljs-title.class_.inherited__{color:#acc267}.hljs-built_in,.hljs-doctag,.hljs-keyword.hljs-atrule,.hljs-quote,.hljs-regexp{color:#12cfc0}.hljs-attribute,.hljs-function .hljs-title,.hljs-section,.hljs-title.function_,.ruby .hljs-property{color:#6fc2ef}.diff .hljs-meta,.hljs-keyword,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-template-tag,.hljs-type{color:#e1a3ee}.hljs-emphasis{color:#e1a3ee;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#deaf8f}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:bold}.theme-light #app-mount::after{content:"This theme is NOT meant to be used in Light Mode. Please switch over to Dark Mode in Settings -> Appearance.";position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:22px;right:0;bottom:calc(100% - 58px);left:72px;border-top-left-radius:8px;font-weight:500;font-size:14px;color:white;background-color:#ed4245}.theme-light #app-mount .container-YkUktl .flex-2S1XBF .button-12Fmur:last-child{-webkit-animation:flash 1s ease infinite;animation:flash 1s ease infinite;color:white;background-color:#ed4245}.theme-light #app-mount #user-settings-cog-Appearance{-webkit-animation:flash 1s ease infinite;animation:flash 1s ease infinite;color:white;background-color:#ed4245 !important}.theme-light #app-mount [aria-activedescendant^=user-settings-cog-Appearance] #user-settings-cog-Appearance--dark{-webkit-animation:flash 1s ease infinite;animation:flash 1s ease infinite;color:white;background-color:#ed4245 !important}.theme-light #app-mount [aria-controls=appearance-tab]{-webkit-animation:flash 1s ease infinite;animation:flash 1s ease infinite;color:white;background-color:#ed4245 !important}.theme-light #app-mount [aria-label=USER_SETTINGS] [tabindex="-1"] + [class=marginTop40-Q4o1tS] .item-2idW98:nth-of-type(1){-webkit-animation:flash 1s ease infinite;animation:flash 1s ease infinite;color:white;background-color:#ed4245 !important}.theme-light #app-mount .base-2jDfDU{margin-top:36px}.theme-light #app-mount .sidebar-1tnWFu{border-radius:0}@-webkit-keyframes flash{0%{-webkit-box-shadow:0 2px 10px rgba(237, 66, 69, 0.2), 0 0 0 2px rgba(237, 65, 68, 0.1);box-shadow:0 2px 10px rgba(237, 66, 69, 0.2), 0 0 0 2px rgba(237, 65, 68, 0.1)}70%{-webkit-box-shadow:0 0 20px 15px rgba(237, 66, 69, 0.1), 0 0 0 6px rgba(237, 65, 68, 0.1);box-shadow:0 0 20px 15px rgba(237, 66, 69, 0.1), 0 0 0 6px rgba(237, 65, 68, 0.1)}100%{-webkit-box-shadow:0 0 20px 15px rgba(237, 66, 69, 0), 0 0 0 6px rgba(237, 65, 68, 0.1);box-shadow:0 0 20px 15px rgba(237, 66, 69, 0), 0 0 0 6px rgba(237, 65, 68, 0.1)}}@keyframes flash{0%{-webkit-box-shadow:0 2px 10px rgba(237, 66, 69, 0.2), 0 0 0 2px rgba(237, 65, 68, 0.1);box-shadow:0 2px 10px rgba(237, 66, 69, 0.2), 0 0 0 2px rgba(237, 65, 68, 0.1)}70%{-webkit-box-shadow:0 0 20px 15px rgba(237, 66, 69, 0.1), 0 0 0 6px rgba(237, 65, 68, 0.1);box-shadow:0 0 20px 15px rgba(237, 66, 69, 0.1), 0 0 0 6px rgba(237, 65, 68, 0.1)}100%{-webkit-box-shadow:0 0 20px 15px rgba(237, 66, 69, 0), 0 0 0 6px rgba(237, 65, 68, 0.1);box-shadow:0 0 20px 15px rgba(237, 66, 69, 0), 0 0 0 6px rgba(237, 65, 68, 0.1)}}#app-mount .scrollerBase-_bVAAt.thin-31rlnD::-webkit-scrollbar-thumb{background-color:var(--scroller-thumb)}#app-mount .scrollerBase-_bVAAt.auto-2K3UW5::-webkit-scrollbar-thumb{background-color:var(--scroller-thumb)}#app-mount .scrollerBase-_bVAAt.auto-2K3UW5::-webkit-scrollbar-track{background-color:var(--scroller-track)}.titleBar-1it3bQ.typeWindows-2-g3UY::after{content:"";position:absolute;pointer-events:none;background:url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="%236b6b6b" d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path></svg>') center/100% no-repeat;width:16px;height:16px;left:5px;top:4px}.titleBar-1it3bQ .wordmarkWindows-2dq6rw{margin-left:13px;color:#6b6b6b}.container-2o3qEW,.membersWrap-3NUR2t{background-color:var(--background-primary)}.container-2o3qEW .members-3WRCEx,.container-2o3qEW .members-3WRCEx > div,.membersWrap-3NUR2t .members-3WRCEx,.membersWrap-3NUR2t .members-3WRCEx > div{background-color:var(--background-primary)}#app-mount .messageListItem-ZZ7v6g:hover{background-color:rgba(255, 255, 255, 0.03)}#app-mount .footer-GXWBBp,#app-mount .textContainer-36wgKK,#app-mount .wrapperAudio-1Bzv_Z{border-color:var(--background-secondary)}#app-mount .wrapperAudio-1Bzv_Z .mediaBarWrapper-33h1oY,#app-mount .wrapperAudio-1Bzv_Z .mediaBarWrapper-33h1oY:after,#app-mount .wrapperAudio-1Bzv_Z .mediaBarWrapper-33h1oY:before{background-color:var(--background-secondary)}#app-mount .wrapperAudio-1Bzv_Z .buffer-3eVqKK,#app-mount .wrapperAudio-1Bzv_Z .buffer-3eVqKK:after,#app-mount .wrapperAudio-1Bzv_Z .buffer-3eVqKK:before{background-color:#3a3a3a !important}#app-mount .guildIconImage-74OdmM{background-color:var(--background-secondary)}#app-mount .wrapper-2vIMkT{background-color:var(--background-secondary)}.callContainer-BGIngG .container-3r7mfc,.callContainer-BGIngG .participants-3hk3ND,.callContainer-BGIngG .scroller-35tvpe{background-color:var(--background-primary)}.folder-241Joy .folderIconWrapper-1oRIZr:hover{background-color:var(--background-secondary-alt)}.folder-241Joy .noIcon-3gSX9V{background-color:var(--background-secondary-alt)}.wrapper-1_HaEi .childWrapper-1j_1ub,.wrapper-1_HaEi [class=circleIconButton-1VxDrg]{background-color:var(--background-secondary-alt)}#app-mount .keyboardShortcutsModal-2CRmCm{background-color:var(--background-secondary)}#app-mount .keybindShortcut-3zF1P9 span{-webkit-box-shadow:inset 0 -4px 0 var(--background-tertiary);box-shadow:inset 0 -4px 0 var(--background-tertiary);border-color:var(--background-tertiary);background-color:var(--background-secondary-alt)}#app-mount .root-g14mjS{-webkit-box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.2);box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.2);background-color:var(--background-secondary)}#app-mount .root-g14mjS .footer-31IekZ{-webkit-box-shadow:none;box-shadow:none;background-color:var(--background-tertiary)}#app-mount .root-g14mjS .input-3r5zZY{background-color:var(--background-tertiary)}#app-mount .root-g14mjS .itemFilled-1cPbtg:hover{background-color:var(--background-primary)}#app-mount .root-g14mjS .scroller-2GkvCq{background-color:var(--background-secondary-alt)}#app-mount .root-g14mjS .reactionSelected-1aMb2K{background-color:var(--background-modifier-selected)}#app-mount .root-g14mjS .container-KM8BU6,#app-mount .root-g14mjS .reactors-1VXca7{background-color:var(--background-secondary)}#app-mount .root-g14mjS .reactorDefault-3GSyaV{-webkit-box-shadow:inset 0 -1px 0 var(--background-secondary-alt);box-shadow:inset 0 -1px 0 var(--background-secondary-alt)}#app-mount .root-g14mjS .card-1SdQ2-,#app-mount .root-g14mjS .lookFilled-1GseHa.select-1Ia3hD{border-color:var(--background-primary) !important;background-color:var(--background-tertiary) !important}#app-mount .root-g14mjS .qualitySettingsContainer-30AsSH{border-color:var(--background-tertiary)}#app-mount .root-g14mjS .item-2OyinQ{border-color:var(--background-primary)}#app-mount .root-g14mjS .item-2OyinQ:not(.selectorButtonSelected-1VZ6hz){background-color:var(--background-tertiary)}#app-mount .root-g14mjS .message-G6O-Wv{-webkit-box-shadow:none;box-shadow:none;background-color:var(--background-tertiary)}body #app-mount .theme-light .root-g14mjS{--header-primary:#fff;--header-secondary:#b9bbbe;--text-normal:#dcddde;--text-muted:#969696;background-color:#141414}body #app-mount .theme-light .root-g14mjS .footer-31IekZ{-webkit-box-shadow:none;box-shadow:none;background-color:#0a0a0a}body #app-mount .theme-light .root-g14mjS .container-x8Y1ix,body #app-mount .theme-light .root-g14mjS .rowContainer-3t7486{background-color:black}body #app-mount .theme-light .root-g14mjS .container-x8Y1ix:hover,body #app-mount .theme-light .root-g14mjS .rowContainer-3t7486:hover{background-color:#1c1c1c}body #app-mount .theme-light .root-g14mjS .formTitle-2YQyhj{color:var(--header-primary)}body #app-mount .theme-light .root-g14mjS .sampleLink-5BWNy9{color:var(--text-muted)}body #app-mount .theme-light .root-g14mjS .input-m1-Y7Q{background-color:#0a0a0a}#app-mount .perksModal-CLcR1c{background-color:var(--background-primary)}#app-mount .perksModal-CLcR1c .perk-19D_HN{background-color:var(--background-secondary)}#app-mount .pageWrapper-2PwDoS{background-color:var(--background-primary)}#app-mount .container-2cd8Mz{background-color:var(--background-primary)}#app-mount .container-2cd8Mz .container-2oNtJn{background-color:var(--background-secondary)}#app-mount .container-2cd8Mz .wrapper-2RrXDg{border-color:var(--background-tertiary);background-color:var(--background-tertiary)}#app-mount .container-2cd8Mz .wrapper-2RrXDg:hover{border-color:var(--background-secondary);background-color:var(--background-secondary)}#app-mount .container-2cd8Mz .wrapper-2RrXDg:hover .section-3G9aLW{background-color:var(--background-tertiary)}#app-mount .container-2cd8Mz .peopleListItem-u6dGxF:hover{background-color:var(--background-tertiary)}#app-mount .container-2cd8Mz .peopleListItem-u6dGxF:hover .actionButton-3-B2x-{background-color:var(--background-primary)}#app-mount .defaultIndicator-1AxErs{background-color:var(--background-accent)}#app-mount .installationPath-2PbaRC{-webkit-box-shadow:0 1px 0 0 var(--background-secondary);box-shadow:0 1px 0 0 var(--background-secondary)}#app-mount .hiddenLibraryApplication-lfw1ab{border-bottom-color:var(--background-secondary)}#app-mount .hiddenLibraryApplication-lfw1ab::before{border-color:var(--background-secondary);background-color:var(--background-secondary)}#app-mount .feature-2IUcBI{background-color:var(--background-secondary)}#app-mount .autocomplete-3NRXG8{background-color:var(--background-tertiary)}#app-mount .autocomplete-3NRXG8 .selected-3H3-RC{background-color:var(--background-secondary-alt)}#app-mount .autocomplete-3NRXG8 .categoryHeader-OpJ1Ly{background-color:var(--background-tertiary)}#app-mount .autocomplete-3NRXG8 .wrapper-22rqw6,#app-mount .autocomplete-3NRXG8 .wrapper-3z7DuG{background-color:var(--background-tertiary)}#app-mount .autocomplete-3NRXG8 .selected-3B2w1z,#app-mount .autocomplete-3NRXG8 .selected-3B2w1z:hover{background-color:var(--background-secondary-alt)}.contentWrapper-3vHNP2,.emojiPicker-6YCk8a{background-color:var(--background-tertiary)}.contentWrapper-3vHNP2 .wrapper-1NNaWG,.emojiPicker-6YCk8a .wrapper-1NNaWG{background-color:var(--background-tertiary)}.contentWrapper-3vHNP2 .categoryItemDefaultCategorySelected-2YeRUu,.contentWrapper-3vHNP2 .categoryItemDefaultCategorySelected-2YeRUu:hover,.emojiPicker-6YCk8a .categoryItemDefaultCategorySelected-2YeRUu,.emojiPicker-6YCk8a .categoryItemDefaultCategorySelected-2YeRUu:hover{background-color:var(--background-secondary-alt)}.contentWrapper-3vHNP2 .inspector-DFKXwB,.emojiPicker-6YCk8a .inspector-DFKXwB{background-color:var(--background-secondary-alt)}.contentWrapper-3vHNP2 .navButtonActive-1EqC5l,.emojiPicker-6YCk8a .navButtonActive-1EqC5l{background-color:var(--background-modifier-selected)}.contentWrapper-3vHNP2 .container-1SX9VC,.contentWrapper-3vHNP2 .container-2oNtJn,.emojiPicker-6YCk8a .container-1SX9VC,.emojiPicker-6YCk8a .container-2oNtJn{background-color:var(--searcharea-background)}.wrapper-22rqw6{background-color:var(--background-secondary)}#app-mount .channelHeader-DFRX8q{background-color:var(--background-secondary)}#app-mount .primary-38Hs-h:hover:not(.disabled-184-il),#app-mount .secondary-2bzKEX,#app-mount .tertiary-1e-lAP{background-color:var(--background-secondary-alt)}#app-mount .primary-38Hs-h:hover:not(.disabled-184-il):hover,#app-mount .secondary-2bzKEX:hover,#app-mount .tertiary-1e-lAP:hover{background-color:var(--background-primary)}#app-mount .messageContainer-3VTXBC,#app-mount .messages-23can0{background-color:var(--background-tertiary)}#app-mount .messages-23can0 .content-3spvdd{background-color:var(--background-secondary-alt)}#app-mount .tutorial-Nb3Zz5{background-color:var(--background-secondary-alt)}#app-mount .tutorialIcon-25VF3Q{background-color:var(--background-tertiary)}.messagesPopoutWrap-3zryHW .messageGroupWrapper-1jf_7C{border-color:var(--background-tertiary);background-color:var(--background-tertiary)}#app-mount .layer-2aCOJ3 .header-1w9Q93{-webkit-box-shadow:none;box-shadow:none;background-color:var(--background-tertiary)}#app-mount .layer-2aCOJ3 .header-1w9Q93 + div{background-color:var(--background-secondary)}#app-mount .layer-2aCOJ3 .tab-TRrPC8.active-1grPyy{background-color:var(--background-modifier-selected)}#app-mount .lookFilled-1GseHa.select-1Ia3hD{border-color:var(--background-secondary);background-color:var(--background-tertiary)}#app-mount .searchHeader-1r_ZSh{background-color:var(--background-tertiary)}#app-mount .searchResultsWrap-5RVOkx{background-color:var(--background-tertiary)}#app-mount .searchResultsWrap-5RVOkx .channelName-3w2Y3c{background-color:var(--background-tertiary)}#app-mount .searchResult-O9NDji{background-color:var(--background-secondary)}#app-mount .container-2McqkF{-webkit-box-shadow:0 0 0 1px var(--background-tertiary), 0 2px 10px 0 rgba(0, 0, 0, 0.2);box-shadow:0 0 0 1px var(--background-tertiary), 0 2px 10px 0 rgba(0, 0, 0, 0.2);background-color:var(--background-tertiary)}#app-mount .container-2McqkF .option-2KkUJO:hover{background-color:var(--background-secondary-alt)}#app-mount .container-2McqkF .option-2KkUJO::after{background:none}#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker,#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__header{background-color:var(--background-tertiary)}#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--next,#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__navigation.react-datepicker__navigation--previous{background-color:var(--background-secondary)}#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__day--disabled,#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__day--outside-month,#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--disabled,#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__day.react-datepicker__day--disabled:hover{background-color:var(--background-secondary)}#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__day,#app-mount .container-2McqkF .calendarPicker-sDhzdi .react-datepicker__day:last-of-type{border-color:var(--background-secondary-alt)}.userPopout-2j1gM4{background-color:var(--background-tertiary)}.userPopout-2j1gM4 .avatar-2Vndt_{border-color:var(--background-tertiary);background-color:var(--background-tertiary)}.userPopout-2j1gM4 .bodyInnerWrapper-2bQs1k,.userPopout-2j1gM4 .footer-1Dc_h6{background-color:var(--background-tertiary)}.userPopout-2j1gM4 .role-2TIOKu{background-color:var(--background-secondary-alt)}.userPopout-2j1gM4 .input-2z42oC{background-color:var(--background-secondary)}.container-1NXEtd .header-3OsQeK:hover,.container-1NXEtd .selected-1GtAC5 .header-3OsQeK{background-color:var(--background-secondary)}.container-1NXEtd .hasBanner-2IrYih .header-3OsQeK{background-color:transparent}.container-1NXEtd .userLimit-VbEkeM .users-2JoyGL{background-color:var(--background-secondary-alt)}.container-1NXEtd .userLimit-VbEkeM .total-1c5KCN{background-color:var(--background-secondary)}.container-1NXEtd .userLimit-VbEkeM .total-1c5KCN::after{border-right-color:var(--background-secondary)}.scroller-WSmht3{background-color:var(--background-primary)}.content-1SgpWY .sidebar-1tnWFu{background-color:var(--background-primary)}.content-1SgpWY .sidebar-1tnWFu > nav{background-color:var(--background-primary)}.panels-3wFtMD{background-color:var(--background-primary)}`,
  head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  
  head.appendChild(style);
  style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
        },
        disable: function(){
          window.location.reload();
        }
      }
    }
        
}

function client() {};
client.get_token = function() {
    if (window.localStorage != undefined) {
        if (Discord.library_event_logging.get_value() == true){
          console.log("[discordjs-pure] localStorage token is there! attempting to grab it..."); 
          let GLOBAL_USER_TOKEN = window.localStorage.getItem('token').replace("\"", "").replace("\"", "");
          console.log(`[discordjs-pure] token grab success! token is ${ GLOBAL_USER_TOKEN }! returning now...`);
          return GLOBAL_USER_TOKEN;
        }
        else {
          let GLOBAL_USER_TOKEN = window.localStorage.getItem('token').replace("\"", "").replace("\"", "");
          return GLOBAL_USER_TOKEN;
        }
    } else {
        if (Discord.library_event_logging.get_value() == true){
          console.log("[discordjs-pure] localStorage token isn't present... opening a window to grab the token!");
          let popup;
          popup = window.open('');
          if (!popup) {
              return alert("[discordjs-pure] the popup required to grab the token was blocked! allow popups or this won't work... after you allow popups, reload this page and re-paste this script")
          }
          popup.document.write("Getting token...");
          window.dispatchEvent(new Event('beforeunload'));
          window.tkn = JSON.parse(popup.localStorage.token);
          popup.close();
          let GLOBAL_USER_TOKEN = window.tkn;
          console.log(`[discordjs-pure] token grab success! token is ${ GLOBAL_USER_TOKEN }! returning now...`);
          return GLOBAL_USER_TOKEN;
       }
       else {
        let popup;
        popup = window.open('');
        if (!popup) {
            return alert("[discordjs-pure] the popup required to grab the token was blocked! allow popups or this won't work... after you allow popups, reload this page and re-paste this script")
        }
        popup.document.write("Getting token...");
        window.dispatchEvent(new Event('beforeunload'));
        window.tkn = JSON.parse(popup.localStorage.token);
        popup.close();
        let GLOBAL_USER_TOKEN = window.tkn;
        return GLOBAL_USER_TOKEN;
       } 
    }
};
client.get_userid = function(GLOBAL_USER_TOKEN) {
    if (GLOBAL_USER_TOKEN.includes('mfa.')) {
        if (Discord.library_event_logging.get_value() == true){
          console.warn("[discordjs-pure] the current user is an mfa one. aborting userid fetch!");
          alert("[discordjs-pure] note: you have 2fa on; i can't grab your userid!");
          console.log("returning token rather than userid; mfa is on :(");
          return GLOBAL_USER_TOKEN;
        }
        else {
          console.warn("[discordjs-pure] note: you have 2fa on; i can't grab your userid!");
          return GLOBAL_USER_TOKEN;
        }
    } else {
        let USERID = atob(GLOBAL_USER_TOKEN.split('.')[0]);
        return USERID;
    }
};
client.send_message = function(message, chan_id, token) {
    if (!token || token == undefined) {
        console.warn("[discordjs-pure] no token was provided. aborting message send!")
    }
    if (!message || message == undefined) {
        console.warn("[discordjs-pure] no message was specified, aborting message send!")
    }
    if (!chan_id || chan_id == undefined) {
        console.warn("[discordjs-pure] no channel id was specified, aborting message send!")
    }
    if (token && message && chan_id) {
        let post_url = `https://discord.com/api/v9/channels/${ chan_id }/messages`;
        let request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open("POST", post_url);
        request.setRequestHeader("authorization", token);
        request.setRequestHeader("accept", "/");
        request.setRequestHeader("authority", "discordapp.com");
        request.setRequestHeader("content-type", "application/json");
        request.send(JSON.stringify({
            content: message
        }))
    } else {
        if (Discord.library_event_logging.get_value() == true){
          console.warn("[discordjs-pure] message send aborted!");
        }
    }
};
client.delete_message = function(msg, token) {
    var chid = msg.channel_id;
    var msgid = msg.id;
    if (!token || token == undefined) {
        console.warn("[discordjs-pure] no token was provided. aborting message del!")
    }
    if (!msg || msg == undefined) {
        console.warn("[discordjs-pure] no message was specified, aborting message del!")
    }
    if (token && msg) {
        let del_url = `https://discord.com/api/v9/channels/${ chid }/messages/${ msgid }`;
        let request = new XMLHttpRequest();
        request.withCredentials = true;
        request.open("DELETE", del_url);
        request.setRequestHeader("authorization", token);
        request.setRequestHeader("accept", "/");
        request.setRequestHeader("authority", "discordapp.com");
        request.setRequestHeader("content-type", "application/json");
        request.send(null)
    } else {
        if (Discord.library_event_logging.get_value() == true){
          console.warn("[discordjs-pure] message del aborted!");
        }
    }
};

client.run = function(GLOBAL_USER_TOKEN) {
    var ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");
    if (Discord.library_event_logging.get_value() == true){
      console.log("establishing websocket connection to 'wss://gateway.discord.gg/?v=6&encoding=json'")
    }
    var interval = 0;
    payload = {
        op: 2,
        d: {
            token: GLOBAL_USER_TOKEN,
            intents: 512,
            properties: {
                $os: "linux",
                $browser: "chrome",
                $device: "chrome"
            }
        }
    };
    ws.addEventListener("open", function open(x) {
        ws.send(JSON.stringify(payload))
    });
    if (Discord.library_event_logging.get_value() == true){
      console.log("they requested info about who we are, sending basically a glorified version of a useragent, including Discord.intents and your GLOBAL_USER_TOKEN.");
    }
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
            case 10:
                const {
                    heartbeat_interval
                } = d;
                setInterval(() => {
                    ws.send(JSON.stringify({
                        op: 2,
                        d: null
                    }))
                }, heartbeat_interval);
                break
        }
        switch (t) {
            case "MESSAGE_CREATE":
                client.on_message(d, GLOBAL_USER_TOKEN)
        }
    });
    console.log("attempted to log in!")
};

console.log("attempted to inject discord.js-pure.js! test it out by pasting one of the examples from https://github.com/13-05/discord.js-pure/tree/main/examples");
