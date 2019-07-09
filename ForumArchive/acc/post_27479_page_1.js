[{"Owner":"jellix","Date":"2017-01-05T21:04:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta collision with a cylindrical imposter is only triggered when my _qt_bullet_qt_ hits the outer surface of the impostor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut my bullet should collide on the inside of the cylinder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve used _qt_flipFaces()_qt_ with the mesh that the impostor is used on without an effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... is my question clear so far?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-06T00:51:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Jelix\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can get that with a CannonJS meshImpostor_co_ but might not be possible with a cylinderImpostor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YOCO9%2334_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YOCO9#34_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAND_co_ only spheres collide with CannonJS meshImpostors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOthers may comment and have better ideas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice the setPhysicsState on a setEnabled(false) cylinder?  Notice that when you enable _t_cyl_t__co_ you can_t_t see it... thru the wireframe cyl2 (even though the wireframe cyl2 is scaled larger)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s all part of the magic... of BJS _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2017-01-06T17:24:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks for that. In my case it seems like it might be the best to develp a special engine on my own.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-01-06T18:26:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can use bouding box states for this as well to see if an object is contained.  Also I_t_m not sure but I think if you flip the.l normals of the object it should treat it like a container.  Don_t_t quote me on that though.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]