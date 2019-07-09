[{"Owner":"yerzhik","Date":"2014-05-14T10:55:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As it says in tutorials_co_ if I am using some model I can load scene by using_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_scene.babylon_qt__co_ engine_co_ function (newScene) {  // Wait for textures and shaders to be ready  newScene.executeWhenReady(function () {  // Attach camera to canvas inputs  newScene.activeCamera.attachControl(canvas)_sm_  // Once the scene is loaded_co_ just register a render loop to render it  engine.runRenderLoop(function() {  newScene.render()_sm_  })_sm_  })_sm_  }_co_ function (progress) {    // To do_dd_ give progress feedback to user})_sm__lt_/pre_gt__lt_p_gt_But I already have one scene and objects on it. How can I add that 3D object with several duplications to existing scene_co_ with collisions supported?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-05-14T11:22:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try this _dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3200-pick-mesh-in-the-scene/?p_eq_20710_qt__gt_http_dd_//www.html5gamedevs.com/topic/3200-pick-mesh-in-the-scene/?p_eq_20710_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Importmesh imports a specific mesh in an existing scene. If you want to import all meshes from an existing 3D model_co_ your first parameter shoulod be an empty string (_qt__qt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yerzhik","Date":"2014-05-14T13:17:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_38307_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_6424_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1400066564_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Try this _dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3200-pick-mesh-in-the-scene/?p_eq_20710_qt__gt_http_dd_//www.html5gamedevs.com/topic/3200-pick-mesh-in-the-scene/?p_eq_20710_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Importmesh imports a specific mesh in an existing scene. If you want to import all meshes from an existing 3D model_co_ your first parameter shoulod be an empty string (_qt__qt_)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Thank you_co_ it worked. But how about collisions?_lt_/p_gt__lt_p_gt_Usually the physics is done by calling_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_box.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ mass_dd_ 2_co_ friction_dd_ 0.4_co_ restitution_dd_ 0.3 })_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But in case of a non standard figure_co_ is there a way to create Impostor for a 3D model?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yerzhik","Date":"2014-05-14T13:31:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have tried using _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_BABYLON.PhysicsEngine.MeshImpostor_co_ but its so slow and finally it freezes. _lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Could someone tell me what can be done here?_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Using BoxImpostor _eq_ its is not natural when moving_co_ rotating._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-05-14T13:49:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I would try to create a compound impostor _dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/12/19/create-wonderful-interactive-games-for-the-web-using-webgl-and-a-physics-engine-babylon-js-amp-cannon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/12/19/create-wonderful-interactive-games-for-the-web-using-webgl-and-a-physics-engine-babylon-js-amp-cannon-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It depends of your 3D model_co_ but try to get several simple impostors (box or sphere) attached to your model._lt_/p_gt__lt_p_gt_For example_co_ a character can have a sphere impostor linked to its head_co_ a box character linked to its body_co_ ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It won_t_t be pixel perfect (as you said_co_ very time-consuming) but it will do the trick._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can check this too _dd_ _lt_a href_eq__qt_http_dd_//www.andybeaulieu.com/Home/tabid/67/EntryID/238/Default.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.andybeaulieu.com/Home/tabid/67/EntryID/238/Default.aspx_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]