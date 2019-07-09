[{"Owner":"babbleon","Date":"2018-05-10T14:16:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m posting this partly to help anyone else who has struggled with this_co_ but also to ask if I am doing something wrong / if this is a bug in the exporter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I export a mesh from Blender with _t_Shape Keys_t__co_ I have to create two _lt_em_gt_Keys_lt_/em_gt_ in addition to the _lt_em_gt_Basis_lt_/em_gt_ for it to work in Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_One Key + basis_dd_ _lt_/strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0XATER%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0XATER#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_A.gif.216f3a9f838f1dd25c759a1a985cc662.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed ipsAttachLink_image_qt_ data-fileid_eq__qt_18227_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/A.gif.216f3a9f838f1dd25c759a1a985cc662.gif_qt_ style_eq__qt_width_dd_400px_sm_height_dd_auto_sm__qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Two keys + basis_dd_ _lt_/strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0XATER_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0XATER_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_B.gif.e36fa5bfdc7bb6428e967527e4aef0b4.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18228_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/B.gif.e36fa5bfdc7bb6428e967527e4aef0b4.gif_qt_ style_eq__qt_width_dd_400px_sm_height_dd_auto_sm__qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-10T14:48:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ I see that the_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0XATER%232_qt_ rel_eq__qt_external nofollow_qt__gt_ key is added_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only thing I can think of on the exporter side is that basis is used for the data for the first key.  Look in the export &amp_sm_ see if the data for the positions is the same as key 1.  If it is different_co_ then I am inclined to think the export is fine &amp_sm_ problem downstream.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-05-10T15:27:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s the positions for the vertices of mesh &amp_sm_ targets for Key 1 (this is the one with only one shape key).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_one shape key_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMesh vertex positions_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_[0.5_co_0_co_0.25_co_-0.5_co_0.38_co_0.25_co_0.5_co_0.38_co_0.25_co_0.5_co_0_co_-0.25_co_-0.5_co_0_co_0_co_0.5_co_0_co_0_co_0.5_co_0.76_co_0_co_-0.5_co_0.76_co_-0.25_co_0.5_co_0.76_co_-0.25_co_0.5_co_0.38_co_-0.25_co_0.5_co_0.38_co_0_co_-0.5_co_0.38_co_-0.25_co_-0.5_co_0_co_-0.25_co_-0.5_co_0.38_co_0_co_-0.5_co_0_co_0.25_co_0.5_co_0.76_co_0.25_co_-0.5_co_0.76_co_0\n_co_-0.5_co_0.76_co_0.25]_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tTarget vertex positions for _t_Key 1_t__dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_[0.5_co_0_co_0.25_co_-0.5_co_0.38_co_0.25_co_0.5_co_0.38_co_0.25_co_0.5_co_0_co_-0.25_co_-0.5_co_0_co_0_co_0.5_co_0_co_0_co_0.5_co_0.76_co_0_co_-0.5_co_0.76_co_-0.25_co_0.5_co_0.76_co_-0.25_co_0.5_co_0.38_co_-0.25_co_0.5_co_0.38_co_0_co_-0.5_co_0.38_co_-0.25_co_-0.5_co_0_co_-0.25_co_-0.5_co_0.38_co_0_co_-0.5_co_0_co_0.25_co_0.5_co_0.76_co_0.25_co_-0.5_co_0.76_co_0\n_co_-0.5_co_0.76_co_0.25]_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t...the same.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis may be something for _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_ to add to the docs until it_t_s sorted._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-10T15:47:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just looked at the code &amp_sm_ cannot see where this is wrong_co_ so I made my own cube_co_ added a basis &amp_sm_ key.  Went into edit mode (while the key was selected) &amp_sm_ colapsed a face in.  When I export_co_ I get different values for the positions &amp_sm_ target positions_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__qt_meshes_qt__dd_[{_qt_name_qt__dd__qt_Cube_qt__co__qt_id_qt__dd__qt_Cube_qt__co__qt_materialId_qt__dd__qt_shapekey.Material_qt__co__qt_billboardMode_qt__dd_0_co__qt_position_qt__dd_[0_co_0_co_0]_co__qt_rotation_qt__dd_[0_co_0_co_0]_co__qt_scaling_qt__dd_[1_co_1_co_1]_co__qt_isVisible_qt__dd_true_co__qt_freezeWorldMatrix_qt__dd_false_co__qt_isEnabled_qt__dd_true_co__qt_checkCollisions_qt__dd_false_co__qt_receiveShadows_qt__dd_false_co__qt_pickable_qt__dd_true_co__qt_tags_qt__dd__qt__qt_\n_co__qt_positions_qt__dd_[1_co_-1_co_-1_co_-1_co_-1_co_1_co_1_co_-1_co_1_co_-1_co_1_co_1_co_1_co_1_co_-1_co_1_co_1_co_1_co_-1_co_-1_co_-1_co_-1_co_1_co_-1]\n_co__qt_normals_qt__dd_[0.577_co_-0.577_co_-0.577_co_-0.577_co_-0.577_co_0.577_co_0.577_co_-0.577_co_0.577_co_-0.577_co_0.577_co_0.577_co_0.577_co_0.577_co_-0.577_co_0.577_co_0.577_co_0.577_co_-0.577_co_-0.577_co_-0.577_co_-0.577_co_0.577_co_-0.577]\n_co__qt_indices_qt__dd_[0_co_1_co_2_co_3_co_4_co_5_co_5_co_0_co_2_co_4_co_6_co_0_co_6_co_3_co_1_co_2_co_3_co_5_co_0_co_6_co_1_co_3_co_7_co_4_co_5_co_4_co_0_co_4_co_7_co_6_co_6_co_7_co_3_co_2_co_1_co_3]\n_co__qt_subMeshes_qt__dd_[{_qt_materialIndex_qt__dd_0_co__qt_verticesStart_qt__dd_0_co__qt_verticesCount_qt__dd_8_co__qt_indexStart_qt__dd_0_co__qt_indexCount_qt__dd_36}]\n_co__qt_instances_qt__dd_[]_co__qt_morphTargetManagerId_qt__dd_535126}\n]_co_\n_qt_morphTargetManagers_qt__dd_[{_qt_id_qt__dd_535126\n_co__qt_targets_qt__dd_[{_qt_name_qt__dd__qt_Key 1_qt_\n_co__qt_positions_qt__dd_[-0.7202_co_-1_co_-1_co_-1_co_-1_co_1_co_-0.7202_co_-1_co_1_co_-1_co_1_co_1_co_-0.7202_co_1_co_-1_co_-0.7202_co_1_co_1_co_-1_co_-1_co_-1_co_-1_co_1_co_-1]_co__qt_influence_qt__dd_0}]}]_co_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tCannot reproduce.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-05-10T15:59:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay... I see the issue. When you export with the _t_Key 1_t_ value set to 1.000 it exports the same positions for meshes &amp_sm_ targets_co_ seems to work when set to any other value.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-10T17:22:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it is more accurate to say that each morph target is always exported with the same values.  The positions themselves are not directly exported in the first place.  A temp copy with all modifiers including current shapekey settings is made_co_ &amp_sm_ that is what gets exported.  This is very powerful.  You might have Mirror modifier for making a perfectly symmetrical mesh with only doing half the work.  You do not to _lt_sup_gt__lt_strong_gt__lt_span style_eq__qt_color_dd_#2980b9_sm__qt__gt_HAVE TO_lt_/span_gt__lt_/strong_gt__lt_/sup_gt_ apply your modifiers to do an export_co_ since it would wreck more development.  Probably best to store all your shapekeys @ 0 in the .blend file to get your mesh exported without any influences per-applied.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]