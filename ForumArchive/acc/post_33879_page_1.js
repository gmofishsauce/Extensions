[{"Owner":"TomaszFurca","Date":"2017-11-08T13:30:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ three days ago imported scene from bledner from my designer. It is new map - town. In PG i put only some meshes for show my problem. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#199KHL%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#199KHL#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s check for draw calls_co_ you can see 9 draw calls for mesh Ivy.002 - I think this is related to submeshes. is it any way to optimize that to reduce draw calls? Actually we have 200-250 draw calls on 120 meshes (without instances). I think this number is to big.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTom\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-11-08T15:22:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBaking in Blender of all of the materials of a mesh into a single set textures_co_ then assigning those as the only material is probably the only way.  The reason for sub-meshes is to handle multiple materials on a single mesh.  A material is essentially a shader pair.  While a Fragment shader can handle more than one texture at a time_co_ this is used in BJS for the different types of textures_co_ eg. diffuse &amp_sm_ bump.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis kind of means you need to have 2 .blends &amp_sm_ and is a pain if you want to make changes.  You have one option for sure.  That is wait till you are ready to deploy before baking.  More draw calls during dev is probably acceptable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn unsupported option is turn on the UI to allow the forcing baking during export by un-commenting _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Exporters/blob/master/Blender/src/babylon-js/mesh.py#L965_qt_ rel_eq__qt_external nofollow_qt__gt_this line_lt_/a_gt_.  I experimented with this_co_ but never turned it on for the general public.  This has known issues with materials using alpha.  You are on your own if you try this.  Good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-11-09T12:56:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for replay. Today i check exporter option to bake textures. It works_co_ but as you wrote earlier_co_ alpha not work correctly - _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#199KHL%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#199KHL#4_lt_/a_gt_ preview of my scene. Behind totem_co_ on right side of dog you can see bugged nature elements. So I decided to do that manualy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTom\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]