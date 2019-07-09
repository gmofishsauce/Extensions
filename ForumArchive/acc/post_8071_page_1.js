[{"Owner":"Zimbofly","Date":"2014-07-23T19:01:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been using tween.js with three.js with good results for auto animating camera with hotkeys._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_is there something simmilar that will work with babylon?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_what I_t_m trying to achieve for example - press key _t_1_t_ and camera tweens to a certain location along a path_lt_/p_gt__lt_p_gt_press key _t_2_t_ and camera goes to a different location._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_any ideas to set me on the right path would be much appreciated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ta._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-23T19:11:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is very simple with the animation of camera and events or Action soon with the support _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Helvetica_co_ arial_co_ freesans_co_ clean_co_ sans-serif_co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_15px_sm__qt__gt_keyUp_co_ keyDown_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-07-23T19:40:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do agree with Zimbofly_co_ predefined tweens would be great. Like _lt_a href_eq__qt_http_dd_//examples.phaser.io/_site/view_full.html?d_eq_tweens&amp_sm_f_eq_bounce.js&amp_sm_t_eq_bounce_qt_ rel_eq__qt_external nofollow_qt__gt_this one_lt_/a_gt__co_ but in 3D _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-24T19:53:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We can almost do that right now._lt_/p_gt__lt_p_gt_You can at anytime create an animation from the current position to a specific position and launch it_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_            var keys _eq_ [                {                    frame_dd_ 0_co_                    value_dd_ this.position                }_co_ {                    frame_dd_ 100_co_                    value_dd_ newPosition                }            ]_sm_            var dataType _eq_ Animation.ANIMATIONTYPE_VECTOR3_sm_            var animation _eq_ new BABYLON.Animation(_qt_myTweenedAnimation_qt__co_ this.position_co_ 100_co_ dataType_co_ Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_            animation.setKeys(keys)_sm_            scene.beginDirectAnimation(this_co_ [animation]_co_ 0_co_ 100)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Zimbofly","Date":"2014-07-29T14:12:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks DeltaKosh - using that code in conjunction with  window.addEventListener(_qt_keydown_qt__co_ function (event) -_lt_/p_gt__lt_p_gt_and reading this great tutorial _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_window.addEventListener(_qt_keydown_qt__co_ function (event) {_lt_/div_gt__lt_div_gt_        //left wall_lt_/div_gt__lt_div_gt_        //hotkey no. 1_lt_/div_gt__lt_div_gt_        if (event.keyCode _eq__eq__eq_ 49 || event.keyCode _eq__eq__eq_ 97) {_lt_/div_gt__lt_div_gt_            animateCameraPositionAndRotation(camera_co_ camera.position_co__lt_/div_gt__lt_div_gt_                new BABYLON.Vector3(LWallXCamera_co_ cameraHeight_co_ startPos)_co__lt_/div_gt__lt_div_gt_                camera.rotation_co__lt_/div_gt__lt_div_gt_                new BABYLON.Vector3(0_co_ faceLeft_co_ camera.rotation.z))_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_now to see if I can chain animations to make camera move around objects _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_great forum - thanks!_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-05-01T16:08:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     Here is a brief on Tween.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t         _lt_strong_gt_ 3 Examples Applying Tween.js with Babylon.js_dd_ _lt_a href_eq__qt_http_dd_//anymscape.com/BJSDEMOS/tweendemo4/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//anymscape.com/BJSDEMOS/tweendemo4/_lt_/a_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_          _lt_/strong_gt_Tween concept was innovated at Pixar at some point (I think)_co_ Catmull_co_ etc. This integration is pretty straight-forward. Maybe even harmonious.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t          It has good modular packaging for myriad-interpolation-variations. Kind of like a pocket-sized power tool. Most interesting_co_ it gives a cross-context _qt_hybrid-interface_qt_ of rich 2D And 3D visual animations.... in the last example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t         Example 1_dd_ Hybrid UI - interface-level_co_ just like jquery_co_ d3_co_ etc... moving stuff around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t         Example 2_dd_ Complex UI - chain html into rich-components like this (font-awesome) starbar.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t         Example 3_dd_ 3D world mix - this one is really interesting. RequestAnimation Meld with BeforeRender Loop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            Because of the nature of the examples_co_ I_t_ll drop the code here. I can do a github. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t           Example 1_dd_ Moving a simple txtBox horizontally with a nice Cubic Interpolation Curve_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                                - setup - easy_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    &lt_sm_!--TWEENJS--&gt_sm_\n    &lt_sm_script src_eq__qt_../lib/tweenjs/stats.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_!--optional bonus points--&gt_sm_\n    &lt_sm_script src_eq__qt_../lib/tweenjs/Tween.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n    &lt_sm_script src_eq__qt_../lib/tweenjs/RequestAnimationFrame.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t                                - minor tricky part next. This master loop needs to go at the bottom of the code. Just like render loops_co_ always have to go last. Infinite loops are so self-centered.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_      /*****************************MASTER-TWEENJS-LOOP****************************\\\n       - Loop for all TWEENJS interpolation updates. Without _t_.update()_t_ call no TWEENS run.\n      \\****************************************************************************/\n      requestAnimationFrame(TWEEN_LOOP)_sm_\n      function TWEEN_LOOP(time) { \n        TWEEN.update(time)_sm_ //trigger all tween interpolation updates.\n        requestAnimationFrame(TWEEN_LOOP)_sm_ //recursion_co_ TWEEN_LOOP.\n      }\n      /**************************-END-TWEEN_LOOP-*********************************/_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t                                  - So put at bottom_co_ and now you can tween _t_all the things_t_... Weird on brain? Yes_co_ it will improve and make sense L8r... Now add initTweens() method like this_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    &lt_sm_!--TWEENJS-EXAMPLE-1--&gt_sm_\n    &lt_sm_div id_eq__qt_txtBox1_qt_ class_eq__qt_csstrick_qt_ style_eq__qt_position_dd_absolute_sm_ top_dd_100px_sm_ left_dd_10px_sm_ width_dd_150px_sm_ height_dd_20px_sm_ background_dd_#a0dde9_sm_ padding_dd_15px_sm_ border_dd_3px solid #ccc_sm_ border-radius_dd_8px_sm_ z-index_dd_102_sm_ text-align_dd_center_sm__qt_&gt_sm_ tweenjs&amp_sm_babylonjs &lt_sm_/div&gt_sm_\n    &lt_sm_script&gt_sm_\n      //init tween by object handle\n      var dynamicState _eq_ { x_dd_50_co_ w_dd_150_co_ h_dd_20}_co_ targetState _eq_ { x_dd_400}_co_ txtBoxDiv _eq_ document.getElementById(_t_txtBox1_t_)_sm_\n      //tween in object format.\n      var txtboxTweenRight _eq_ new TWEEN.Tween(dynamicState).to(targetState_co_ 2000 )_sm_\n      txtboxTweenRight.onUpdate(function(){ txtBoxDiv.style.left _eq_ dynamicState.x+_t_px_t__sm_/*console.log(_t_txtbox_dd_ _t_+this.x)*/})_sm_ //interpolation steps\n      txtboxTweenRight.onComplete(function(){/*console.log(_t_right_dd_ done_t_)*/}) //end of tween callback.\n      txtboxTweenRight.easing(TWEEN.Easing.Cubic.Out)_sm_\n      txtboxTweenRight.delay( 44 )_sm_\n      //init tween with chaining...\n      var txtboxTweenLeft _eq_ new TWEEN.Tween(dynamicState).to({x_dd_ 10}_co_ 2000 ).easing(TWEEN.Easing.Cubic.Out).delay( 44 )\n        .onUpdate(function(){ txtBoxDiv.style.left _eq_ dynamicState.x+_t_px_t_})\n        .onComplete(function(){/*console.log(_t_left_dd_ done_t_)*/}) //end of tween callback.\n      //animate in succession\n      var txtBoxAnimation _eq_ function(){\n          txtboxTweenRight.chain(txtboxTweenLeft)_sm_\n          // txtboxTweenLeft.chain(txtboxTweenRight)_sm_\n          txtboxTweenRight.start()_sm_\n      }\n      var txtboxtweenWidth _eq_ new TWEEN.Tween(dynamicState).to({w_dd_ 600}_co_ 2000 ).easing(TWEEN.Easing.Cubic.Out).delay( 44 )\n        .onUpdate(function(){ txtBoxDiv.style.width _eq_ dynamicState.w+_t_px_t_})\n        .onComplete(function(){/*console.log(_t_left_dd_ done_t_)*/}) //end of tween callback.\n      var txtboxtweenHeight _eq_ new TWEEN.Tween(dynamicState).to({h_dd_ 500}_co_ 2000 ).easing(TWEEN.Easing.Cubic.Out).delay( 44 )\n        .onUpdate(function(){ txtBoxDiv.style.height _eq_ dynamicState.h+_t_px_t_})\n        .onComplete(function(){/*console.log(_t_left_dd_ done_t_)*/}) //end of tween callback.\n      var txtBoxSizeAnimation _eq_ function(){\n          txtboxtweenWidth.chain(txtboxtweenHeight)_sm_\n          txtboxtweenWidth.start()_sm_\n      }\n    &lt_sm_/script&gt_sm_\n    &lt_sm_!--END-TWEENJS-EXAMPLE-1--&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t              - That is all the code. You_t_ll get a &lt_sm_div&gt_sm_ that goes right then left. And if you un-comment a line_co_  it will go right then left forever. With nice cubic-out interpolation curves and a hybrid-interface html-overlay via AnimationFrame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext_co_ tweening a complex component (star-bar).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hunts","Date":"2017-05-01T16:35:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/9224-zimbofly/?do_eq_hovercard_qt_ data-mentionid_eq__qt_9224_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/9224-zimbofly/_qt_ rel_eq__qt__qt__gt_@Zimbofly_lt_/a_gt_ do you mean something like this?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2Q8VL4%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2Q8VL4#6_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-05-01T16:44:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExample 2. A StarBar_dd_ _lt_a href_eq__qt_http_dd_//anymscape.com/BJSDEMOS/tweendemo4/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//anymscape.com/BJSDEMOS/tweendemo4/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    Description_dd_ It accordions in and out_co_ incrementally highlighting stars in _t__dd_blue_t_ and then when 10 are completed_co_ increments totalcount and total star in _t__dd_yellow_t_. Which gives the UX to make you feel like a winner.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    Here is the code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    &lt_sm_!--**********************STAR-BAR-TWEEN-EXAMPLE*****************************************--&gt_sm_\n      &lt_sm_div id_eq__qt_starbar_qt_&gt_sm_\n        &lt_sm_div class_eq__t_icotrophy_t_&gt_sm_&lt_sm_i id_eq__qt_icotrophy_qt_ title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_ style_eq__t_color_dd_#444_sm__t_&gt_sm_&lt_sm_/i&gt_sm_ &lt_sm_/div&gt_sm_\n        &lt_sm_div id_eq__qt_starCount_qt_&gt_sm_0&lt_sm_/div&gt_sm_\n        &lt_sm_span id_eq__qt_starDivider_qt_&gt_sm_|&lt_sm_/span&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz1_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_ \n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz2_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz3_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz4_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz5_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz6_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz7_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz8_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz9_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n        &lt_sm_div class_eq__t_icostar_t_ id_eq__qt_icostarz10_qt_&gt_sm_&lt_sm_i title_eq__qt_stars_qt_ class_eq__qt_fa fa-star_qt_&gt_sm_&lt_sm_/i&gt_sm_&lt_sm_/div&gt_sm_\n      &lt_sm_/div&gt_sm_ \n    &lt_sm_style&gt_sm_\n    #starbar{\n        height_dd_20px_sm_\n        width_dd_65px_sm_\n        top_dd_5px_sm_\n        left_dd_5px_sm_\n        position_dd_fixed_sm_\n        padding_dd_6px_sm_\n        border-radius_dd_ 20px_sm_\n        background-color_dd_ blue_sm_\n        border_dd_ 1px solid #666_sm_\n        overflow_dd_hidden_sm_\n        display_dd_inline-block_sm_\n        text-align_dd_center_sm_\n        overflow_dd_hidden_sm_\n        z-index_dd_100_sm_\n        /*line-height_dd_ 1.4_sm_*/\n        /*white-space_dd_ nowrap_sm_*/\n      }\n    .icostar_co_ .icotrophy{\n        float_dd_left_sm_\n        width_dd_30px_sm_\n      }\n    #starCount{\n      float_dd_left_sm_\n      font-style_dd_impact_sm_\n    }\n    #starDivider{\n      float_dd_left_sm_\n      margin-left_dd_10px_sm_\n      /*text-shadow_dd_ 0 -1px 1px black_sm_*/\n      }\n\n    #icostarz1_co_ #icostarz2_co_ #icostarz3_co_ #icostarz4_co_ #icostarz5_co_ #icostarz6_co_ #icostarz7_co_ #icostarz8_co_ #icostarz9_co_ #icostarz10{\n        /*display_dd_none_sm_*/\n        opacity_dd_0_sm_\n      }\n    &lt_sm_/style&gt_sm_\n\n\n    &lt_sm_script&gt_sm_\n      /******************************TWEEN-STARBAR-EXAMPLE-CODE********************************************************/\n      var starBarExpand_co_ starBarCollapse_co_ starBarAnimation_co_ starBarFull_eq_false_co_ starBarEmpty_eq_false_sm_ //composite-memebers-design-pattern.\n      // txtBoxAnimation_sm_\n      function tweenInit_Starbar() {\n        var icostarz _eq_ document.getElementsByClassName(_t_icostar_t_)_sm_\n        var icotrophy _eq_ document.getElementById(_t_icotrophy_t_)_sm_\n        var countDiv _eq_ document.getElementById(_t_starCount_t_)_sm_\n        var starbar _eq_ document.getElementById(_t_starbar_t_)_sm_\n        var tweenState_Starbar _eq_ {width_dd_ 75 }_sm_\n        var starCount _eq_ 0_co_ visCount _eq_ 0_sm_\n        starBarAnimation _eq_ function(){\n          starBarCollapse.chain(starBarExpand)_sm_\n          starBarCollapse.start()_sm_\n        }\n        starBarExpand _eq_ new TWEEN.Tween(tweenState_Starbar).to({width_dd_360}_co_ 2000).delay(44).easing(TWEEN.Easing.Cubic.Out)\n          .onUpdate(function(){\n            starbar.style.width _eq_ tweenState_Starbar.width+_t_px_t__sm_\n            //show stars at position.\n            if(visCount&lt_sm_1&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_100){icostarz[0].style.opacity_eq_1_sm_ icostarz[0].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_2&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_130){icostarz[1].style.opacity_eq_1_sm_ icostarz[1].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_3&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_160){icostarz[2].style.opacity_eq_1_sm_ icostarz[2].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_4&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_190){icostarz[3].style.opacity_eq_1_sm_ icostarz[3].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_5&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_220){icostarz[4].style.opacity_eq_1_sm_ icostarz[4].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_6&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_250){icostarz[5].style.opacity_eq_1_sm_ icostarz[5].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_7&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_280){icostarz[6].style.opacity_eq_1_sm_ icostarz[6].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_8&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_310){icostarz[7].style.opacity_eq_1_sm_ icostarz[7].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_9&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_340){icostarz[8].style.opacity_eq_1_sm_ icostarz[8].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n            if(visCount&lt_sm_10&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&gt_sm__eq_355){icostarz[9].style.opacity_eq_1_sm_ icostarz[9].children[0].style.color_eq__t_#000_t__sm_ visCount++_sm_}\n          })\n          .onComplete(function(){\n            icotrophy.style.color _eq_ _t_#8facd5_t__sm_ //lightblue\n            starBarFull_eq_true_sm_\n          })_sm_\n\n        starBarCollapse _eq_ new TWEEN.Tween(tweenState_Starbar).to({width_dd_ 75 }_co_ 2000).easing(TWEEN.Easing.Cubic.Out).delay( 44 )\n          .onUpdate(function(){\n            starbar.style.width _eq_ tweenState_Starbar.width+_t_px_t__sm_\n            //hide stars at position\n            if(visCount_eq__eq__eq_1&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_100){icostarz[0].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_2&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_130){icostarz[1].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_3&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_160){icostarz[2].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_4&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_190){icostarz[3].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_5&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_220){icostarz[4].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_6&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_250){icostarz[5].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_7&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_280){icostarz[6].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_8&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_310){icostarz[7].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_9&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_340){icostarz[8].style.opacity_eq_0_sm_ visCount--_sm_}\n            if(visCount_eq__eq__eq_10&amp_sm_&amp_sm_parseInt(tweenState_Starbar.width)&lt_sm__eq_370){icostarz[9].style.opacity_eq_0_sm_ visCount--_sm_}\n          })\n          .onComplete(function() {\n              countDiv.innerHTML _eq_ ++starCount_sm_ //increment txt number.\n              icotrophy.style.color _eq_ _t_yellow_t__sm_ //goldstar for reading this far\n              starBarEmpty_eq_true_sm_\n          })_sm_\n\n        //chaining example_co_ enstead fit into gameplay via requestAnimationFrame.\n        // starBarExpand.chain(starBarCollapse)_sm_\n        // starBarCollapse.chain(starBarExpand)_sm_\n        starBarExpand.start()_sm_ \n      }\n      tweenInit_Starbar()_sm_\n      /*******************************-END-EXAMPLE-2-*******************************/\n\n \n       //updated master loop....       \n \n      /*****************************MASTER-TWEENJS-LOOP****************************\\\n       - Loop for all TWEENJS interpolation updates. Without this call no TWEENS run.hybrid.\n      \\****************************************************************************/\n      requestAnimationFrame(TWEEN_LOOP)_sm_\n      function TWEEN_LOOP(time) { \n        TWEEN.update(time)_sm_ //trigger all tween interpolation updates.\n        //(optional)flag runtime animations within TWEEN_LOOP\n        if(starBarFull){\n          starBarFull_eq_false_sm_\n          starBarCollapse.start()_sm_\n        }else if(starBarEmpty){\n          starBarEmpty_eq_false_sm_\n          starBarExpand.start()_sm_\n        }\n        requestAnimationFrame(TWEEN_LOOP)_sm_ //recursion_co_ TWEEN_LOOP.\n      }\n      /**************************-END-TWEEN_LOOP-*********************************/\n \n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t          - Results_co_ this starbar is ok. It has some needs (fontawesome icon wrapping - not hiding always_co_ and needs dynamic width count ).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                &lt_sm_link rel_eq__qt_stylesheet_qt_ href_eq__qt_../lib/font-awesome/font-awesome-4.7.0/css/font-awesome.min.css_qt_&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     Why use with Babylon? Because adds a hybrid-2D-ui-overlay-interface? I agree it may even give you double-loops - which - I hope experts chime in. It seems to me this is mixing cpu loops and gpu loops... on deeper research_co_ seems AnimationFrame can hit GPU depending on context_co_ so_co_ performance hit undetermined. Or maybe it is good to keep lower importance stuff like 2d ui layer interpolation out of gpu optimized code. Curious...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t     Anyway_co_ that is 2 cents on tween.js used as an overlay to babylon canvas. Next_co_ it is possible to combine the loops.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-05-01T17:12:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExample 3_dd_ A Big Sphere Eats a Little Sphere - or you just imagined that_dd_ _lt_a href_eq__qt_http_dd_//anymscape.com/BJSDEMOS/tweendemo4/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//anymscape.com/BJSDEMOS/tweendemo4/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is only a TEST_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_      /*****************************MASTER-TWEENJS-LOOP-IN-BJS****************************\\\n       - Loop for all TWEENJS interpolation updates. Without this call no TWEENS run.\n       - use this loop to signal calculation updates from BJS to Tween.js. Idk. Risky?!!  \n      \\****************************************************************************/\n            scene.registerBeforeRender(function() {\n                //tweenjs integration with babylonjs. vcool. this runs all TWEEN interpolations.\n                TWEEN.update( window.performance.now() )_sm_\n            })_sm_\n      /**************************-END-TWEEN_LOOP-*********************************/\n _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t Here is the tween of circles that intersect (similar to a tween.js example_co_ but in 3D_co_ because it is operating on BabylonJS components.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            /*********************-TWEEN-EXAMPLE-3-*************************/\n            /*---------------Mixing-TWEENJS &amp_sm_&amp_sm_ BabylonJS-------------------*/\n                var targetOrb_co_ targetOrbState_co_ targetTween_sm_ //Member-composite-pattern.\n                var trackingOrb_co_ trackingOrbState_co_ trackingTween_sm_ //Member-composite-pattern.\n                var initOrbTween _eq_ function(){\n                    targetOrb _eq_ new BABYLON.Mesh.CreateSphere(_qt_sphere_qt__co_ 14_co_ 1_co_ scene)_sm_\n                    targetOrb.position_eq_ new BABYLON.Vector3(0_co_10_co_40)_sm_\n                    targetOrbState _eq_ { x_dd_targetOrb.position.x_co_ y_dd_ targetOrb.position.y_co_ z_dd_targetOrb.position.z }_sm_\n                    targetTween _eq_ new TWEEN.Tween( targetOrbState ).to( { x_dd_ 10_co_ y_dd_ 20_co_ z_dd_-70 }_co_ 4000 ).onUpdate( function() {\n                        targetOrb.position.x_eq_this.x_sm_\n                        targetOrb.position.z_eq_this.z_sm_\n                    }).onComplete(function() { })_sm_\n                    // } ).start()_sm_\n\n                    trackingOrb _eq_ new BABYLON.Mesh.CreateSphere(_qt_sphere_qt__co_ 14_co_ 2_co_ scene)_sm_\n                    trackingOrb.position_eq_ new BABYLON.Vector3(-20_co_10_co_10)_sm_\n                    trackingOrbState _eq_ { x_dd_trackingOrb.position.x_co_ y_dd_ trackingOrb.position.y_co_ z_dd_trackingOrb.position.z }_sm_\n                    // new TWEEN.Tween( trackingOrbState ).to( { x_dd_ -10_co_ y_dd_ 20_co_ z_dd_10 }_co_ 3000 ).onUpdate( function() {\n                    trackingTween _eq_ new TWEEN.Tween( trackingOrbState ).to(targetOrbState_co_ 4000 ).onUpdate( function() {\n                        trackingOrb.position.x_eq_this.x_sm_\n                        trackingOrb.position.z_eq_this.z_sm_\n                    }).onComplete(function() {\n                          // forwardBackward _eq_ !forwardBackward_sm_ //toggle to go forward.\n                    })_sm_ \n\n                }_sm_\n\n                babylonSphereAnimation _eq_ function(){\n                    initOrbTween()_sm_\n                    targetTween.start()_sm_\n                    trackingTween.start()_sm_\n                }\n\n\n      /*****************************MASTER-TWEENJS-LOOP-IN-BJS****************************\\\n       - Loop for all TWEENJS interpolation updates. Without this call no TWEENS run.\n       - use this loop if you want to signal calculation updates from BJS to  \n      \\****************************************************************************/\n            scene.registerBeforeRender(function() {\n                //tweenjs integration with babylonjs. vcool. this runs all TWEEN interpolations.\n                TWEEN.update( window.performance.now() )_sm_\n            })_sm_\n      /**************************-END-TWEEN_LOOP-*********************************/\n \n\n\n            /*********************-END-TWEEN-EXAMPLE-3-*************************/\n\n\n\n        return scene_sm_\n    } _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOne more thing_co_ button handlers in a testing apparatus_co_ for animation method onclick testing_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\n\n      document.getElementById(_t_btn1_t_).onclick _eq_ function(e){ \n        starBarAnimation()_sm_\n      }_sm_\n\n      document.getElementById(_t_btn2_t_).onclick _eq_ function(e){ \n        txtBoxAnimation()_sm_\n      }_sm_\n\n      var babylonSphereAnimation_sm_\n      document.getElementById(_t_btn3_t_).onclick _eq_ function(e){ \n        babylonSphereAnimation()_sm_       \n      }_sm_\n\n      document.getElementById(_t_btn4_t_).onclick _eq_ function(e){ \n        txtBoxSizeAnimation()_sm_\n      }_sm_\n      document.getElementById(_t_btn5_t_).onclick _eq_ function(e){ \n        txtBoxAnimation()_sm_\n      }_sm_\n\n      document.getElementById(_t_btn6_t_).onclick _eq_ function(e){ \n        txtBoxAnimation()_sm_\n      }_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all - 2D overlay animations_co_ not so bad. Free is cheaper than Greensock. And mixing TweenLoop with 3D beforeRender is possible_co_ but needs performance review. The ending code is confusing to understand the tween-clumps. But stepping through the three steps really helps to comprehend the strange tween syntax.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ hope this is useful_co_ bye. _dd_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-01T17:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is really cool and helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for having taking time to share it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-05-01T17:26:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks DK_co_ I_t_ll githubit.... and thank you for making it possible. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-05-01T17:36:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25354-hunts/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25354_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25354-hunts/_qt_ rel_eq__qt__qt__gt_@hunts_lt_/a_gt__co_ I see how that link injects GreenSock into Babylon Playground_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    var s _eq_ document.createElement(_t_script_t_)\ns.src _eq_ _qt_https_dd_//cdnjs.cloudflare.com/ajax/libs/gsap/1.8.4/TweenMax.min.js_qt_\ndocument.body.appendChild(s)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tvcool...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-05-01T20:22:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_48211_qt_ data-ipsquote-contentid_eq__qt_8071_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1406144410_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/23/2014 at 3_dd_40 PM_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI do agree with Zimbofly_co_ predefined tweens would be great. Like _lt_a href_eq__qt_http_dd_//examples.phaser.io/_site/view_full.html?d_eq_tweens&amp_sm_f_eq_bounce.js&amp_sm_t_eq_bounce_qt_ rel_eq__qt_external nofollow_qt__gt_this one_lt_/a_gt__co_ but in 3D _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou can use TweenMax_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5UZNC%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5UZNC#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5UZNC%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5UZNC#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-05-07T15:31:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAs far as I understand_co_ license for Tween.js is free (gpl i think) and greensock tweenmax_co_ I think_co_ is $99 a year to use commercially.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]