[{"Owner":"Madclaws","Date":"2018-11-13T13:14:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am making a simple 3D endless game with primitive shapes(5 cubes and 1 sphere).But the game is running on 30 FPS in mid-range phone.When i use scene optimizer with moderate degredation_co_after some time fps increases to 60.But how do i know what was the issue for game lag_co_So that i can fix it later.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-13T15:45:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe moderate options are described here_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_sceneoptimizer#options_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_sceneoptimizer#options_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor a live update on what is going on_co_ you can use this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSceneOptimizer.OptimizeAsync(...).onNewOptimizationAppliedObservable.add(function(option) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.sceneoptimizer#onnewoptimizationappliedobservable_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.sceneoptimizer#onnewoptimizationappliedobservable_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Madclaws","Date":"2018-11-14T05:36:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the tips._lt_br /_gt_\n\tSo i think actually meshes was not the problem.I am getting 60 FPS _co_when _qt__lt_strong_gt_SETTING HARDWARE SCALING LEVEL TO 2.25_lt_/strong_gt__qt_.Can somebody explain what this message means?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-11-14T06_dd_22_dd_07Z_t_ title_eq__t_11/14/2018 06_dd_22  AM_t_ data-short_eq__t_Nov 14_t__gt_November 14_lt_/time_gt_ by Madclaws_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_had to change reference image\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-14T15:51:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo this is an equivalent to calling engine.setHardwareScalingLevel(0.25).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is really useful on mobile where the fillrate is limited. This function will ask the engine to render at 1/4 of the current mobile resolution\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Madclaws","Date":"2018-11-16T02:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]