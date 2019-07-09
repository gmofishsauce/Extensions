[{"Owner":"jellix","Date":"2017-04-25T15:34:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI build up an object that is made of many identical items.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently I_t_m merging all the meshes so that I have only a few drawing calls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead I could use instances. The advantage would be that the construction can be changed dynamically (add or remove some of the instances) and so the merged mesh doesn_t_t have to be disposed and to be rebuild on every change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in view of the performance_dd_ Is the rendering faster by merging meshes or by using instances?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-04-25T16:29:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSPS _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/solid_particle_system_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/solid_particle_system_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-25T16:35:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tinstances reduce draw calls only.  Merging both reduces draw calls and render loop Javascript _qt_accounting_qt_ overhead.  Instance are more flexible.  You can freezematrix them as well as freeze the materials (though there is a new materials pipeline in works)_co_ then if you are disciplined enough to unfreeze - move - refreeze_co_ you will remove a big chunk of the Javascript overhead of instances.  This assumes that you are not trying to do crazy as shit numbers of instances.  SPS is really your final possible solution for that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2017-04-25T16:43:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat answers!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]