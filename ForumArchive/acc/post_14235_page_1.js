[{"Owner":"dsman","Date":"2015-05-01T21:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let_t_s say I have a have a plane in front of camera and then one another plane behind it. If I click_co_ scene.pick will give me the first plane. Any way to get the plane behind it? Assuming the click would be touching the background plane if the foreground plane wasn_t_t there ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can we get something like array of all meshes comes in the path of click. And we can get whichever mesh we want in order. Like Threejs does I guess. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-01T23:09:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ for performance reason_co_ we return only the closest one. But you can provide a predicate to remove specific meshes from the hit testing (or jsut use mesh.isPickable _eq_ false)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-01T23:14:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I know about mesh.isPickable . But I want to be able to choose both at same time. Any alternative workaround ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-05-02T07:51:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Maybe you can do two picks. first set the closest plane to pickable false and do the pick_co_ then make it pickable and pick again?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-02T09:08:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow . That was so simple and silly. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]