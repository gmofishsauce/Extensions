[{"Owner":"Kilombo","Date":"2015-04-21T16:01:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good afternoon everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For some reason_co_ my planets function is giving me the error in the topic. Everything works right in the units class_co_ but in planets is not working. And i can_t_t seem to find the answer. Help wanted plz _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The console is returning _qt_Uncaught TypeError_dd_ Cannot read property _t_setPhysicsState_t_ of undefined_qt_ in system.js line 104_co_ is the one in bold._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to implement Oimo.js in my project btw._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_system.prototype.setPlanets _eq_ function (){_lt_/div_gt__lt_div_gt_    var temp _eq_ this_sm__lt_/div_gt__lt_div_gt_        BABYLON.SceneLoader.ImportMesh(name_co_ _qt_Assets/babylonreadyfiles/_qt__co_ _qt_planets.babylon_qt__co_ scenes[0]_co_ function(newMeshes) {_lt_/div_gt__lt_div_gt_                _lt_/div_gt__lt_div_gt__lt_strong_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_            newMeshes[0].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/span_gt__lt_/strong_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            var planet1 _eq_ newMeshes[0]_sm_                _lt_/div_gt__lt_div_gt_            var planet2 _eq_ newMeshes[1]_sm__lt_/div_gt__lt_div_gt_            newMeshes[1].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet3 _eq_ newMeshes[2]_sm__lt_/div_gt__lt_div_gt_            newMeshes[2].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet4 _eq_ newMeshes[3]_sm__lt_/div_gt__lt_div_gt_            newMeshes[3].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet5 _eq_ newMeshes[4]_sm__lt_/div_gt__lt_div_gt_            newMeshes[4].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet6 _eq_ newMeshes[5]_sm__lt_/div_gt__lt_div_gt_            newMeshes[5].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet7 _eq_ newMeshes[6]_sm__lt_/div_gt__lt_div_gt_            newMeshes[6].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet8 _eq_ newMeshes[7]_sm__lt_/div_gt__lt_div_gt_            newMeshes[7].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_            var planet9 _eq_ newMeshes[8]_sm__lt_/div_gt__lt_div_gt_            newMeshes[8].setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor_co_ { mass_dd_ 1000_co_ restitution_dd_0.001 })_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            if (temp.planet1 _eq__eq__eq_ _qt_planet1_qt_){_lt_/div_gt__lt_div_gt_                planet1.scaling.x _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet1.scaling.y _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet1.scaling.z _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet1.position.x _eq_ temp.posx/2_sm__lt_/div_gt__lt_div_gt_                planet1.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet1.position.z _eq_ temp.posz/2_sm__lt_/div_gt__lt_div_gt_                planet1.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[0].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet1_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_                console.log(planet1)_sm__lt_/div_gt__lt_div_gt_                //planet1.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet1_co_temp.planetId1_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_                _lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet2 _eq__eq__eq_ _qt_planet2_qt_){_lt_/div_gt__lt_div_gt_                planet2.scaling.x _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet2.scaling.y _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet2.scaling.z _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet2.position.x _eq_ temp.posx*(6/4)_sm__lt_/div_gt__lt_div_gt_                planet2.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet2.position.z _eq_ temp.posz_sm__lt_/div_gt__lt_div_gt_                planet2.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[1].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet2_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_                //planet2.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet2_co_temp.planetId2_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_                _lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet3 _eq__eq__eq_ _qt_planet3_qt_){_lt_/div_gt__lt_div_gt_                planet3.scaling.x _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet3.scaling.y _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet3.scaling.z _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet3.position.x _eq_ temp.posx*(6/4)_sm__lt_/div_gt__lt_div_gt_                planet3.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet3.position.z _eq_ temp.posz*(8/4)_sm__lt_/div_gt__lt_div_gt_                planet3.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[2].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet3_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_               // planet3.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet3_co_temp.planetId3_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet1 _eq__eq__eq_ _qt_planet4_qt_){_lt_/div_gt__lt_div_gt_                planet4.scaling.x _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet4.scaling.y _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet4.scaling.z _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet4.position.x _eq_ temp.posx/2_sm__lt_/div_gt__lt_div_gt_                planet4.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet4.position.z _eq_ temp.posz/2_sm__lt_/div_gt__lt_div_gt_                planet4.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[3].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet4_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_                //planet4.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet4_co_temp.planetId1_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet2 _eq__eq__eq_ _qt_planet5_qt_){_lt_/div_gt__lt_div_gt_                planet5.scaling.x _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet5.scaling.y _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet5.scaling.z _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet5.position.x _eq_ temp.posx_sm__lt_/div_gt__lt_div_gt_                planet5.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet5.position.z _eq_ temp.posz*(7/4)_sm__lt_/div_gt__lt_div_gt_                planet5.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[4].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet5_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_                //planet5.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet5_co_temp.planetId2_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet3 _eq__eq__eq_ _qt_planet6_qt_){_lt_/div_gt__lt_div_gt_                planet6.scaling.x _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet6.scaling.y _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet6.scaling.z _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet6.position.x _eq_ temp.posx*(7/4)_sm__lt_/div_gt__lt_div_gt_                planet6.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet6.position.z _eq_ temp.posz/2_sm__lt_/div_gt__lt_div_gt_                planet6.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[5].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet6_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_               // planet6.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet6_co_temp.planetId3_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet1 _eq__eq__eq_ _qt_planet7_qt_){_lt_/div_gt__lt_div_gt_                planet7.scaling.x _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet7.scaling.y _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet7.scaling.z _eq_ 500_sm__lt_/div_gt__lt_div_gt_                planet7.position.x _eq_ temp.posx/2_sm__lt_/div_gt__lt_div_gt_                planet7.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet7.position.z _eq_ temp.posz/2_sm__lt_/div_gt__lt_div_gt_                planet7.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[6].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet7_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_                //planet7.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet7_co_temp.planetId1_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet2 _eq__eq__eq_ _qt_planet8_qt_){_lt_/div_gt__lt_div_gt_                planet8.scaling.x _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet8.scaling.y _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet8.scaling.z _eq_ 300_sm__lt_/div_gt__lt_div_gt_                planet8.position.x _eq_ temp.posx_sm__lt_/div_gt__lt_div_gt_                planet8.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet8.position.z _eq_ temp.posz*(7/4)_sm__lt_/div_gt__lt_div_gt_                planet8.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[7].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet8_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_                //planet8.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet8_co_temp.planetId2_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            if (temp.planet3 _eq__eq__eq_ _qt_planet9_qt_){_lt_/div_gt__lt_div_gt_                planet9.scaling.x _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet9.scaling.y _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet9.scaling.z _eq_ 750_sm__lt_/div_gt__lt_div_gt_                planet9.position.x _eq_ temp.posx*(7/4)_sm__lt_/div_gt__lt_div_gt_                planet9.position.y _eq_ 5_sm__lt_/div_gt__lt_div_gt_                planet9.position.z _eq_ temp.posz/2_sm__lt_/div_gt__lt_div_gt_                planet9.actionManager _eq_ new BABYLON.ActionManager(scenes[0])_sm__lt_/div_gt__lt_div_gt_                newMeshes[8].checkCollisions _eq_ true_sm__lt_/div_gt__lt_div_gt_                scenes[0].beginAnimation(planet9_co_ 0_co_ 100_co_ true_co_ 0.04)_sm__lt_/div_gt__lt_div_gt_               // planet9.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0 })_sm__lt_/div_gt__lt_div_gt_                makeOverOut(planet9_co_temp.planetId3_co__qt_planet_qt_)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_        })_sm__lt_/div_gt__lt_div_gt_}_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2015-04-21T16:36:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well..i sorted out.. now the planets just fall of.... but they shouldn_t_t cause i_t_ve set gravity to zero._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyone knows why?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-21T18:51:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Did you set the physics gravity to 0?_lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_scene.enablePhysics(_lt_/span_gt__lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_new _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.Vector3(0_co_ 0_co_ 0)_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_new _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.OimoJSPlugin())_sm__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2015-04-21T19:01:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yap.. I do. Strange thing_co_ If I put no mass on the planets they still stand_co_ but if I put some mass_co_ they just disappear._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]