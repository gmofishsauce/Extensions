[{"Owner":"juanmajr93","Date":"2017-01-10T21:24:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am designing the subsoil of terrain in my scene. This subsoil is formed by tubes which represents water _t_s canal or electric _t_s net. Well_co_ to allow the view under terrain I have to show it as a wire object. My first question is_dd_ how can I show only the ground object as wire mode? I have made this but changing to this mode the visualization of all elements of scene...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe second question is relative to animations. Inside the tubes I would like to add animation of water to get a better level of realism. Firstly_co_ I can give some transparency to material of tubes and after i should add this animation. Do you know how can I add this animation inside of tube? In thefollow image you can see my scene to understand me better_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/tuberias.PNG.943cded8e69b821f4c55b4e78e8b1857.PNG_qt_ data-fileid_eq__qt_11103_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_tuberias.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11103_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/tuberias.PNG.943cded8e69b821f4c55b4e78e8b1857.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-10T21:30:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto turn on wireframe_co_ you just need to set mesh.material.wireframe _eq_ true\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor your animation you could think of a smaller tube with a texture on it and you can animate texture.uOffset to simulate the movement \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-10T23:32:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ good idea!! There would be a movement of texture to simulate the animation of water. However_co_ I have never used the param uOffset to simulate this. Could you show me some examples of this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlways_co_ thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-11T18:34:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSomething like that_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10KKS5%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10KKS5#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-11T20:31:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is done and the result is amazing! I share with you my proyect_dd__lt_a href_eq__qt_http_dd_//217.217.131.1_dd_8081/subsuelo/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//217.217.131.1_dd_8081/subsuelo/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question as you can check is relative to strange hiding of boxes. They are drawn using SPS and when you are moving around scene they disappear and I dont know the reason...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-12T01:23:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ for sps\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-12T04:15:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tvery beautifl scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI didn_t_t get what disapear in your scene_co_ but maybe is it related to the SPS visibility _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-12T07:40:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPerfect! _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ I used this function_dd_ SPS.isAlwaysVisible _eq_ true_sm_ and I solved my problem\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-13T15:30:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ If you saw my project that I posted here_co_ you can see I use SPS to draw boxes and tubes. Well_co_ now I have to interact with them so I have added the follow code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        var makeOverOut _eq_ function (mesh) {\nmesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh.material_co_ _qt_emissiveColor_qt__co_ mesh.material.emissiveColor))_sm_\nmesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh.material_co_ _qt_emissiveColor_qt__co_ BABYLON.Color3.White()))_sm_\nmesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 1)_co_ 150))_sm_\nmesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1.1_co_ 1.1_co_ 1.1)_co_ 150))_sm_\n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI call this function after sps is created....\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_redTuberias _eq_ sps.buildMesh()_sm_\nredTuberias.material _eq_ matTuberia_sm_ \nsps.setParticles()_sm_\t\nredTuberias.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\nmakeOverOut(redTuberias)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHowever_co_ I dont get any response when my cursor is over tubes _t_s net... What could be the cause?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-13T15:34:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou might set your sps.mesh as pickable or the whole sps _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#pickable-particles_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#pickable-particles_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin this case_co_ don_t_t forget either to refresh the visible size at least once_co_ either to enable the bbox computation in order to set the right visibility (pickability) _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-18T15:50:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ _lt_/span_gt_I have working about SPS and I have the next question_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.- How can I pick a particle of SPS which are under ground? A this moment I cant pick them and I cant rotate the camera when I clic over ground...  The code that I am using is the follow_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\t    scene.onPointerDown _eq_ function(evt_co_ pickResult) {\n\t\t\tvar faceId _eq_ pickResult.faceId_sm_\n\t\t\tvar idx _eq_ spsTuberias.pickedParticles[faceId].idx_sm_\n\t\t\tvar p _eq_ spsTuberias.particles[idx]_sm_\n\t\t\tp.color.r _eq_ 1_sm_\n\t\t\tp.color.b _eq_ 0_sm_\n\t\t\tp.color.g _eq_ 0_sm_\n\t\t\tspsTuberias.setParticles()_sm_\n\t   }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t2.- I need to do the same but when cursor is over tube. I use the follow code however_co_ all SPS mesh is selected and I need to do this for each particle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var makeOverOut _eq_ function (mesh) {\nmesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger_co_ mesh.material_co_ _qt_emissiveColor_qt__co_ mesh.material.emissiveColor))_sm_\nmesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ mesh.material_co_ _qt_emissiveColor_qt__co_ BABYLON.Color3.White()))_sm_\n\n\t\t}\nredTuberias.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\nmakeOverOut(redTuberias)_sm_\t_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can check here_dd_ _lt_a href_eq__qt_http_dd_//217.217.131.1_dd_8081/subsuelo/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//217.217.131.1_dd_8081/subsuelo/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-18T16:59:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCould you reproduce it in a PG please ?_co_ I can_t_t download your scene ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\thave you checked this _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#pickable-particles_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#pickable-particles_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(240_co_240_co_240)_sm_float_dd_none_sm__qt__gt_isPickable_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_font-style_dd_normal_sm_font-weight_dd_300_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm__qt__gt_true_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-18T17:46:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_  yes my SPS isPickable howeber it is under the ground and when I use the method before and it seems that SPS dosnt receive the pickDown event.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry again to this link _lt_a href_eq__qt_http_dd_//217.217.131.1_dd_8081/subsuelo/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//217.217.131.1_dd_8081/subsuelo/_lt_/a_gt_ _co_ now is _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_lighter_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-18T18:35:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tset ground.isPickable _eq_ false   ?  *shrug*  Ground is intercepting picks?  Maybe.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-18T19:03:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI agree with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-18T19:16:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYES!! it was that. However I want when I clic outside of tubes_co_ they must recover the material that had before. I dont know the event of unselected this tube...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-18T22:17:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMoreover_co_ I need to add overMouse action. I have done it to mesh_t_s box however_co_ I don_t_t know how can I do using SPS. I have read the manual of SPS an there isnt any method related.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-19T05:51:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FPT1A%2368_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FPT1A#68_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust search in the forum _dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22562-solid-particle-system-rollover-on-particle-event/?do_eq_embed&amp_sm_comment_eq_128467&amp_sm_embedComment_eq_128467&amp_sm_embedDo_eq_findComment#comment-128467_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-19T09:28:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ because of your fast answers. This was that I need it! However with particle of sps I can only change color and I want change material of it. To show the overMouse action I would like to create an halo arround the piece changing emissiveColor property. Do you know how can I do it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question is the follow_dd_ Are there any control_t_s variable of particle to diferenciate between over or clic? Now I am using _qt_p.picked_qt_ only...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can look the progress of application in the same link\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-19T09:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is tool to control the way a particle is picked... actually_co_ the particle pickability is just the SPS mesh pickability. So p.picked is the right way to go_co_ like for any other meshes. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe SPS is only a mesh_co_ so it_t_s given only one material at once.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut you can play the particle _lt_em_gt_uvs_lt_/em_gt_ property to set what part of the texture image you want to apply to each particle.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-19T09:37:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOkey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ and if you change color of a particle and later you want to reset this value. What is the value by default that had this material of SPS? I think that are1_co_1_co_1\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-19T09:42:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlease read carefully all the SPS documentation (I spent so much time to write this) _dd_  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#colors-and-uvs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#colors-and-uvs_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParticle colors are vertex color_co_ they can mix with texture/material colors.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-19T10:06:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyes I have made it! Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]