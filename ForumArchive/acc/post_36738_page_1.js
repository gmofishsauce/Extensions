[{"Owner":"Christoph","Date":"2018-03-30T17:39:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been wondering how to deal with user input while using babylon js and where to pay attention. My idea was to use websockets + babylonjs to render some text so the users have the ability to talk to each other. However while I guess that the webgl part is rather safe (because no user input enters the DOM) I wonder how safe the html5 canvas and it_t_s _qt_fillText()_qt_ and _qt_strokeText()_qt_ are.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-30T18:57:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thuh?_lt_br /_gt_\n\t_lt_br /_gt_\n\tthis is kinda not fully explained.  The way you would lock down local methods like that is have them fired on multiple clients only of it comes from the server with the correct salt and hash key or a two step oAuth.  Otherwise the user is free to manipulate the text they see on their local client all they want_co_ it as a security gap is not a factor._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Cryptographic_nonce_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//en.wikipedia.org/wiki/Cryptographic_nonce_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tUs this method or a likeness to control methods coming from the servers and verify their integrity.  Once validated handle everything on the client side and sync to the server._lt_br /_gt_\n\t_lt_br /_gt_\n\tBut for the most part if a user wants to mess with their local stuff they are going to_co_ you can have certain variables flagged and tracked.  Then have the client poll the sever intermittently to verify they have not been manipulated_co_ but that is a lot of extra steps to prevent someone from digging around.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Christoph","Date":"2018-03-30T19:29:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMea culpa. My head hurts and I guess I messed up the question. Lemme try again _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to use a websocket-server so users have the ability to exchange messages_co_ a simple chat_co_  that_t_s the untrusted user input part. Because those messages are sent by users and could contain malicious input that_t_s broadcasted to other users_co_ filtering on the server side is must because of this_co_ else it will lead to XSS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I was not able to find anything related to xss_co_  webgl / html5 canvas because they are used in babylonjs for text rendering and that_t_s the place the user input is used at and where XSS could happen.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-30T19:47:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tjust sterilize any input before you run it on the server.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]