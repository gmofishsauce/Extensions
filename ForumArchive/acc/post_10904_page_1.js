[{"Owner":"The Snow Irbix","Date":"2014-12-07T18:13:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello guys !_lt_/p_gt__lt_p_gt_For few days I tried to move a box with physics collisions enable._lt_/p_gt__lt_p_gt_I did a playground to resume it _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LKCKO%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LKCKO#1_lt_/a_gt__lt_/p_gt__lt_p_gt_I read all other topic about this_co_ I tried to refresh the physics box position_co_ use translate and rotate_co_ use moveWithCollisions but nothings seems work._lt_/p_gt__lt_p_gt_I also tried to move my box with apply impulse at the center of the box but it always failed due to the precision I think._lt_/p_gt__lt_p_gt_And applyImpulse is less suitable to move a box (future character)._lt_/p_gt__lt_p_gt_I need help _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_// FRENCH_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Salut tout le monde !_lt_/p_gt__lt_p_gt_Depuis quelques jours j_t_essaye de déplacer une simple boite avec les collisions entre objets._lt_/p_gt__lt_p_gt_voir _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LKCKO%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LKCKO#1_lt_/a_gt__lt_/p_gt__lt_p_gt_J_t_ai lu tout les autres topics qui parlait de ça_co_ et j_t_ai testé les _qt_solutions_qt_ à chaque fois (updatePhysicsBodyPosition_co_ translate_co_ rotate_co_ moveWithCollisions) mais rien ne semble marcher._lt_/p_gt__lt_p_gt_J_t_ai aussi essayé avec les impulsions physiques (applyimpulse) au milieu de la boite (getBoundingInfo().boundingBox.center) mais celà ne marchait pas non plus. (La boite partait en rotation en appliquant plusieurs translations différentes)._lt_/p_gt__lt_p_gt_Et apply impulse est moins adaptés pour controler les déplacements des personnages._lt_/p_gt__lt_p_gt_Bref_co_ j_t_ai besoin d_t_aide !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-07T18:43:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Tu n’est pas obliger d_t_utiliser la physique._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_tu a une fonction _qt_moveWithCollisions_qt_ qui consommera moins et seras plus simple._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_meshPlayer _eq_ ? ton personnagevar forward _eq_ new BABYLON.Vector3(parseFloat(Math.sin(parseFloat(meshPlayer.rotation.y))) / 8_co_ -0.15_co_ parseFloat(Math.cos(parseFloat(meshPlayer.rotation.y))) / 8)_sm_meshPlayer.moveWithCollisions(forward)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-07T18:52:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi irbix!  Fun demo._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The main thing you forgot to do... is_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_scene.enablePhysics()_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LKCKO%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LKCKO#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now it_t_s working better.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I setPhysicsState on the ground_co_ too_co_ and made it a bit bigger_co_ and made your basic shapes a bit smaller._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ you had no _t_restitution_t_ (bounciness) factor set in any of your setPhysicsState settings.  I added some._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Lastly_co_ I usually set my object rotations and positions BEFORE I use setPhysicsState on an object.  After an object has its setPhysicsState set.. it is a bit more difficult to rotate and translate.  Generally speaking_co_ applyImpulse is the only way to apply movement force...  where a PHYSICS collision can happen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s a version where I use gentle continuous impulse to roll the sphere into the box._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LKCKO%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LKCKO#3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When moving a character with keypresses_co_ it is not uncommon for functions to repeatedly run over and over while the key is held down.  Tiny amounts of repeated applyImpulse work fine for moving characters and having physics engines react.  *shrug*  I_t_m no pro_co_ though.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I used the animate function to repeatedly applyImpulse to the sphere._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Continuous small applyImpulsings in the animation loop... opens thoughts for many games_co_ such as Sumu Wrestling (two boxes pushing on each other with random-generated force values)_co_ and... the old mechanical horse racing games.  (good betting/drinking games)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__qt_Ladies and Gentlemen!  Tonight_co_ 7 boxes will race across a plane with random amounts of energy force!  PLACE YOUR BETS_co_ because the next race is about to begin!_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then some idiot pours oil on the racetrack and all the boxes lose traction.  But they also lose friction!!!  HOILy Horses_co_ Batman!  You won_t_t want to miss the next...  Racing Boxes! (a product of IrbixCo)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2014-12-07T20:19:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you guys_co_ I tried to use move with collisions and translate but it doesn_t_t work_co_ see _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LKCKO%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LKCKO#4_lt_/a_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_box.refreshBoundingInfo()_sm_box.applyImpulse(new BABYLON.Vector3(-0.1276_co_ 0_co_ 0)_co_ box.getBoundingInfo().boundingBox.center)_sm_ // work//box.translate(new BABYLON.Vector3(-0.5_co_ 0_co_ 0)_co_ 0.1_co_ BABYLON.Space.WORLD)_sm_ // Doesn_t_t work _dd_ no collision//box.moveWithCollisions(-1_co_ -0.15_co_ 0)_sm_ // Error _dd_ Uncaught TypeError_dd_ undefined is not a function _lt_/pre_gt__lt_div_gt_moveWithCollisions give me the same result in local than translate _dd_ no collision_lt_/div_gt__lt_p_gt_And apply impulse with KeyBoard Event rotate the box sometimes   _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JSG4F_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JSG4F_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-07T20:42:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahh Irbix... you are running into a situation that is not well documented around these parts.  I_t_m no expert_co_ but there are two types of collisions.  One is a PHYSICS collision_co_ calculated by an _lt_u_gt_add-on physics library_lt_/u_gt_ such as Oimo or Cannon.  This collision uses _qt_imposters_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The collisions that Dad72 is speaking-of... is mesh ellipsoid and mesh boundingBox collisions.  In that system_co_ which IS built-in to BJS_co_ the _qt_imposters_qt_ don_t_t come along when a mesh is moved or rotated.  In order to get a PHYSICS ENGINE collision_co_ the imposter must be moving WITH the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When you did scene.enablePhysics (enable add-on physics engine)_co_ the _qt_world_qt_ changes (at least for objects with setPhysicsState).  It becomes a world of applyImpulsings and imposter collisions.  Try to keep these two worlds separated in your mind.  They don_t_t play well together.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Physics colliding is slow_co_ as you might have noticed.  Lots of calculations are needed to get that box to dance around on the rubber floor like it does._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Babylon built-in collision of boundingBoxes and ellipsoids_co_ checkable with checkCollsions and intersectsMesh_co_ etc... is much faster... but you will need to manually make the box dance around on the rubber floor.  The framework collision system will not do _qt_true physics_qt_ (force_co_ mass_co_ friction_co_ restitution_co_ etc) like the physics engine will._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I might have worded that badly_co_ and/or I could be wrong.  But that_t_s how I see it.  It will take some experimenting to see WHAT types of positioning and rotating is available with physics engine enabled_co_ and what is available with physics engine disabled.  Keep experimenting_co_ good luck._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-07T23:09:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m still trying to work this out too. I need my player character to collide with standard physics objects_co_ but also move controlably._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-12-08T12:29:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello there_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I will create an article about this in my website._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But basically_co_ what you have to do is something like this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var body _eq_ box.setPhysicsState(BABYLON.PhysicsEngine.BoxImpostor_co_ {mass_dd_1_co_ friction_dd_0.001_co_ restitution_dd_1.5})_sm_if (this.mvtDirection[0] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(0_co_0_co_s)_co_ box.position)_sm_}if (this.mvtDirection[1] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(0_co_0_co_-s)_co_ box.position)_sm_}if (this.mvtDirection[2] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(-s_co_0_co_0)_co_ box.position)_sm_}if (this.mvtDirection[3] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(s_co_0_co_0)_co_ box.position)_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2014-12-08T16:52:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank_t_s Wingnut and Temechon ! So I decided to use physics collision for all objects except my character. I would like to use moveWithCollision but it doesn_t_t work in babylon js playground.. why ?_lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_4 - Object vs. object collision_lt_/strong_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm_font-size_dd_16px_sm__qt__gt_You can also do the same thing with a mesh by playing with mesh.ellipsoid property andmesh.moveWithCollisions(velocity) function. This function will try to move the mesh according to given velocity and will check if there is no collision between current mesh and all meshes with checkCollisions activated._lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ _t_Segoe UI_t__co_ Arial_co_ freesans_co_ sans-serif_sm_font-size_dd_16px_sm__qt__gt_You can also use mesh.ellipsoidOffset to move the ellipsoid on the mesh (By default the ellipsoid is centered on the mesh)_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_How use it ? Can I have an example please ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2014-12-09T21:13:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I resolve my problem_co_ thank you all _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-10T08:41:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have a demo for you iribix_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/babylon/moveCharacter/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/babylon/moveCharacter/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2014-12-10T13:52:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much ! It_t_s exactly what I want to do !  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2015-04-21T18:29:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63771_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10904_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1418041797_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hello there_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I will create an article about this in my website._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But basically_co_ what you have to do is something like this _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var body _eq_ box.setPhysicsState(BABYLON.PhysicsEngine.BoxImpostor_co_ {mass_dd_1_co_ friction_dd_0.001_co_ restitution_dd_1.5})_sm_if (this.mvtDirection[0] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(0_co_0_co_s)_co_ box.position)_sm_}if (this.mvtDirection[1] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(0_co_0_co_-s)_co_ box.position)_sm_}if (this.mvtDirection[2] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(-s_co_0_co_0)_co_ box.position)_sm_}if (this.mvtDirection[3] !_eq_ 0) {      box.applyImpulse(new BABYLON.Vector3(s_co_0_co_0)_co_ box.position)_sm_}_lt_/pre_gt__lt_p_gt_I_t_m sorry for bringing this topic alive again. But.... Temechon I need to ask you something about your post. The _qt_S_qt_ value is the value of the force applied in the axe right ? So... by this I understand that for my _qt_point and click_qt_ game I need to do a function that calculates the force needed for the ship to go from the origin to the target right?_lt_/p_gt__lt_p_gt_Btw... If I apply zero to the gravity_co_ shouldn_t_t i be able to apply mass ? Without everything falling down to the infinite ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks.._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-04-21T20:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ the variable S is the force_co_ and the vector3 is the force direction._lt_/p_gt__lt_p_gt_I don_qt__t_t know about zero gravity_co_ can you have a test playground for this ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-22T10:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Kilombo - if you want to move a character to a given point you_t_ll probably want a spring force - that is_co_ you apply a force towards the target point_co_ proportional to the distance. If the force is too strong it will shoot past the target and bounce back_co_ but if you tune the damping and force you can probably get it to move smoothly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More generally though_co_ moving characters controlled by physics is a pretty nontrivial problem_co_ and every game does it a little differently. Some games directly set the character_t_s velocity_co_ others apply forces_co_ etc. In my case I apply forces_co_ but I also turn off the character_t_s friction when a key is pressed. But it really changes with each game_t_s desired feel._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]