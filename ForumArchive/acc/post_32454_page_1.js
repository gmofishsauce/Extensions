[{"Owner":"Raggar","Date":"2017-08-18T23:40:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m in search for a way to dynamically change a sprite.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s say I have a spriteManager with spriteA.png. and a sprite called sprite linked to said manager. I want to change the sprite/spriteManager to spriteB.png. This might happen once every frame_co_ so simply creating a new sprite won_t_t quite cut it. I see the manager has a sprites array as well as a _spriteTexture_co_ but I don_t_t see any function that allows me to change these. Am I missing something that would allow me to do this_co_ or are there issues I should be aware of?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Christoph","Date":"2017-08-19T08:07:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou could use a sprite sheet instead_co_ so you can change to many different _qt_sprites_qt__co_  spriteA.png would be cell 1_co_ spriteB.png would be cell 2.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-08-19T18:09:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_186064_qt_ data-ipsquote-contentid_eq__qt_32454_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1503130032_qt_ data-ipsquote-userid_eq__qt_18232_qt_ data-ipsquote-username_eq__qt_Christoph_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Christoph said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou could use a sprite sheet instead_co_ so you can change to many different _qt_sprites_qt__co_  spriteA.png would be cell 1_co_ spriteB.png would be cell 2.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m already using a sprite-sheet. I just thought it would be stupid to include some animation that might or might not be used. However_co_ I realize now that loading them dynamically might result in added overhead(I think).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI saw an old review I made of the Doom movie some 12 years ago_co_ and started thinking about the old games. I thought it would be fun to create some 2.5D-ish mechanics.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI read that some of the old games use rays to determine which angle the model is viewed from_co_ and then apply the appropriate sprite based on that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img src_eq__qt_http_dd_//i.imgur.com/BGkAGf1.png_qt_ class_eq__qt_ipsImage_qt_ alt_eq__qt_BGkAGf1.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t4 red planes make up the front_co_ back and sides.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4 green planes make up the angles in between.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA ray is cast between the sphere in the middle and the main camera of the player. When a plane is hit_co_ you_t_ll know from which angle the player is viewing the model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a look at this example_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#G8JR7V%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#G8JR7V#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry moving the camera around the monster. The sprite-sheet consists of an animation of 8 angles_co_ while 5 is enough as those can be inversed(they already are_co_ just haven_t_t made a new sheet). This decrease the size_co_ but also decrease the realism a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s an example of multiple monsters_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#G8JR7V%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#G8JR7V#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll have to limit the rays to their only monsters_co_ otherwise_co_ as you can see_co_ rays will catch the clipping planes from nearby monsters_co_ and falsely use this data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea why Mr. GC is acting crazy in scene #9?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img src_eq__qt_http_dd_//i.imgur.com/T8sBlXm.png_qt_ class_eq__qt_ipsImage_qt_ alt_eq__qt_T8sBlXm.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m reusing the rays_co_ but I have no knowledge of the internal workings of sprites. When I play a new animation from the sprite-sheet_co_ is the old ones somehow dereferenced and cleared from memory?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I comment out the manageAnimations function_co_ the load on the GC is drastically reduced_co_ and the draw function takes the load instead. I_t_m not entirely sure whether or not disabling the rays have any major performance improvements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-08-20T17:46:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUsing fastCheck and invisible meshes seems to boost performance a bit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#G8JR7V%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#G8JR7V#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-21T17:55:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey_co_ did you fix your issue?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-09-15T17:31:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_186250_qt_ data-ipsquote-contentid_eq__qt_32454_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1503338144_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/21/2017 at 7_dd_55 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHey_co_ did you fix your issue?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not quite sure how I should approach this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fastCheck boolean needs to be set to false_co_ otherwise only 4 angles will be used_co_ instead of all 8.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe way sprites work_co_ I think rays are the only way to go_co_ but it seems the rays are pretty expensive when running 1x ray / monster object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t dispose the rays_co_ but they still turn up in the GC. I_t_m not sure how the internals work_co_ and whether or not this is expected behavior.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img src_eq__qt_https_dd_//i.imgur.com/YStCOdG.png_qt_ class_eq__qt_ipsImage_qt_ alt_eq__qt_YStCOdG.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]