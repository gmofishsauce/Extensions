[{"Owner":"entropy","Date":"2018-11-28T04:45:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m seeing a dependency on setTarget() and how an anaglyph camera generates parallax for the left/right images. For example_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgenerates an image where the front box looks like it_t_s coming out of the screen and the back box is behind the screen_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/screen1.png.ad6a7d487189f43ca812ea3529d7518f.png_qt_ data-fileid_eq__qt_21239_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21239_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/screen1.thumb.png.6acf7b6468f435e1fa4c45e942a27296.png_qt_ alt_eq__qt_screen1.thumb.png.6acf7b6468f435e1fa4c45e942a27296.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow let_t_s change the setTarget to a different position_co_ but keep everything else the same_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow both boxes appear in front of the screen_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21240_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/screen2.png.3155421f0c46eb4aaab87c3c5798bbbb.png_qt_ alt_eq__qt_screen2.png.3155421f0c46eb4aaab87c3c5798bbbb.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a couple of questions with respect to this_dd_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tIs this the expected behavior?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tIf it is_co_ is there a simple way to point the camera without altering the parallax?\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-30T07:12:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi entropy_co_ sorry for the slow replies.  I think something is broken_co_ but I just started testing_co_ so not sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_co_ I backed-out the camera a bit_co_ and cosine-animated the target.z values.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWatch console.  When target.z values go negative_co_ scene goes to hell.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s with non-anaglyph... just a UniversalCamera.  It_t_s still acting very strange.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s a free camera_co_ non-anaglyph_co_ backed-out even more (and added ground plane).  Still not looking good. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would think... there should _lt_strong_gt_not_lt_/strong_gt_ be any up/down movement.  I_t_m not sweeping any Y values on target v3.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*scratch scratch*  I_t_ll keep thinking and sniffing around.  Calling all forum helpers!  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (thx)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-30T16:46:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry for the late reply_co_ I am looking at it now (Thx Wingnutt).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-30T17:02:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is by design (as the code is looking to be doing _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_ ) and the camera target seems to define the screen plane.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadding _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ on this one as I am not that familiar with the anaglyph and i wonder if it is intended.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-30T17:10:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo double check with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ All good the target defines the focal point so it works exactly as expected.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-30T22:40:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s acting normal?  Anyone know?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee console.   I_t_m ONLY moving target.z.  Why is the cam moving up/down?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid I accidentally bend an eyeball_co_ somehow?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInfo welcome_co_ thx.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Perhaps not pertinent to original issue... sorry.  But maybe._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-30T23:47:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust an optical illusion _dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see that looking further or closer on the same plane_co_ it gives the feeling that things are moving around.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"entropy","Date":"2018-12-01T04:46:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for all the replies. I_t_ve done some addition testing and come to the same conclusion as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__dd_ setTarget() sets the plane of the screen. What was originally confusing to me is I_t_m using getTarget() of one camera as the input of setTarget() of another camera...something like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_camera2.setTarget(camera1.getTarget())_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe problem was that getTarget() always returns a vector that is one unit away from the camera position. This was resetting the screen plane of my anaglyph camera. Now what I scale the target vector like\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var v1 _eq_ camera1.getTarget()_sm_\nvar v2 _eq_ v1.subtract(camera1.position)_sm_\nv2 _eq_ v2.scale(20.0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbefore using it to set the target of the second camera. It all works as expected_co_ now!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-01T11:29:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ - I changed the link in your post... to #8 (it WAS #7 - same URL I reffed).  I think #8 is what you actually wanted to show us.  And it showed me what I needed to know... thx!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ I probably should have asked... before moderator-editing a URL.  Sorry if I crossed a line_co_ or if it wasn_t_t supposed to be changed to #8.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeantime...  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat (#9) is what I was expecting.  But_co_ I had the camera Y _eq_ 3_co_ so it was tilting down as the target neared the cam.  My mistake.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ cool_co_ thanks for the help/research_co_ _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt__co_ and thanks for the anaglyph research/tests_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/33196-entropy/?do_eq_hovercard_qt_ data-mentionid_eq__qt_33196_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/33196-entropy/_qt_ rel_eq__qt__qt__gt_@entropy_lt_/a_gt_ .  A thread that_t_s also a tutorial... love it._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-12-01T12:26:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the link change _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ You did well by changing it I do not mind at all _lt_span_gt_(that s the full power of the community _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt__lt_span_gt_ )_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-01T16:11:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_236676_qt_ data-ipsquote-contentid_eq__qt_41557_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543639560_qt_ data-ipsquote-userid_eq__qt_33196_qt_ data-ipsquote-username_eq__qt_entropy_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ entropy said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe problem was that getTarget() always returns a vector that is one unit away from the camera position.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah_co_ entropy_co_ I_t_m not sure_co_ but you may have found a bug in core_co_ there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s say you set scene.activeCamera _eq_ cam1.  Then you set cam1.target to some world vec3 point.  Then switch to cam2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter that_co_ console.log(cam1.getTarget()) is located 1 unit in-front-of cam1.position?  (which I think is default position when creating the cam - before target setting)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if that_t_s good/right.  Cam1 is not holding-onto it_t_s .getTarget() setting_co_ after it goes inactive?  Or at-all?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems wrong.  Tests... watch console.  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#10_lt_/a_gt_  hmm.  Likely_co_ Wingnut mistakes_co_ as usual. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems... SOMEWHERE_co_ I should be able to get a console log of vector3(1_co_2_co_3) ... target1.  I don_t_t ever see it.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe PROPERTY _lt_em_gt_.target_lt_/em_gt_ seems to work ok_co_ so far... but get/set targets... seems to be grumpy or maybe used for some other purpose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a test PG using NO get/set... only .target setting. _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#11_lt_/a_gt_   Looks pretty good_co_ as best I can tell. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"entropy","Date":"2018-12-01T19:29:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_236703_qt_ data-ipsquote-contentid_eq__qt_41557_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543680679_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe PROPERTY _lt_em_gt_.target_lt_/em_gt_ seems to work ok_co_ so far... but get/set targets... seems to be grumpy or maybe used for some other purpose.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat might be a more elegant solution. For whatever it_t_s worth_co_ the API documentation states that .getTarget() _qt_Return the current target position of the camera. This value is expressed in local space._qt_ Perhaps the _qt_local space_qt_ means that it is normalized relative to the camera position. Also_co_ the target property doesn_t_t seem listed in the API documentation...maybe that_t_s why I missed it!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-01T19:46:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_236727_qt_ data-ipsquote-contentid_eq__qt_41557_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543692540_qt_ data-ipsquote-userid_eq__qt_33196_qt_ data-ipsquote-username_eq__qt_entropy_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t32 minutes ago_co_ entropy said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAlso_co_ the target property doesn_t_t seem listed in the API documentation...maybe that_t_s why I missed it! _lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOh that_t_s not good.  That_t_s a Wingnut mistake_co_ then.  There is no .target on uni-cam or its ancestors touch and free.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat means... I over-loaded the universalCamera class.  I accidentally added my own .target property... which BJS will surely completely ignore.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ don_t_t use .target.  That was a Wingnut mistake.  Good catch_co_ E.  Ya better go back to .lockedTarget_co_ I suppose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd yes_co_ that local space note... is pertinent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow it makes sense that getTarget() and setTarget() don_t_t do anything with a .target property.   heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should check the code more often.  Sorry about that.  I_t_m an idiot. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you got your issue solved.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"entropy","Date":"2018-12-01T20:02:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_236728_qt_ data-ipsquote-contentid_eq__qt_41557_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543693599_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOh that_t_s not good.  That_t_s a Wingnut mistake_co_ then.  There is no .target on uni-cam or its ancestors touch and free.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThat means... I over-loaded the universalCamera class.  I accidentally added my own .target property... which BJS will surely completely ignore.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOk_co_ don_t_t use .target.  That was a Wingnut mistake.  Good catch_co_ E.  Ya better go back to .lockedTarget_co_ I suppose.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd yes_co_ that local space note... is pertinent.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNow it makes sense that getTarget() and setTarget() don_t_t do anything with a .target property.   heh\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI should check the code more often.  Sorry about that.  I_t_m an idiot.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAre you sure? I just checked...the target property seems to work in the PG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-12-01T20:11:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou mean for _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#12_lt_/a_gt_  and similar?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ it will appear to work fine... for storing a vector 3 that we stuffed into a we-created property on universal camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe camera will never use it (automatically) for anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s see if I can show more...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 9 reporting undefined.  No such property on universalCamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just forced it to exist_co_ forced a value into it.  The camera isn_t_t using it at all_co_ but it is storing it_co_ for us. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt stays the same thru camera switches_co_ because... BJS system ignores it and never uses it.  Nothing changes it_co_ except us.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s simply a property I created and stored a value into it... I think.  I don_t_t think the camera will use it... ever... at all... until we use .lockedTarget instead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt least that_t_s how I see it.  But we KNOW how wrong I can be.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  We_t_re certainly ALLOWED to make our own camera.target property and put anything we wish... into it.  But... BJS system will likely not use it for anything.  But values set via setTarget()... do SOMETHING important... but likely having NOTHING to do with our _qt_invented_qt_ .target property._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_With me?   It was a HUGE Wingnut-caused wild-goose-chase I sent us on.  Sorrrrrry._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"entropy","Date":"2018-12-01T20:40:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_236731_qt_ data-ipsquote-contentid_eq__qt_41557_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543695097_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t26 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou mean for _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TJTYGR%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TJTYGR#12_lt_/a_gt_  and similar?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYeah_co_ it will appear to work fine... for storing a vector 3 that we stuffed into a we-created property on universal camera.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe camera will never use it (automatically) for anything.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGot it...it_t_s more of the way JavaScript works. I_t_m more used to the way c#/.Net does things_co_ which would have thrown an exception in such cases. My apologies for the ignorance...appreciate the explanation_co_ though!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]