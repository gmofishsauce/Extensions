[{"Owner":"jerome","Date":"2018-09-12T20:24:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tand this recent topic_co_ directly from the WASM project itself_co_ may also help _dd_  _lt_a href_eq__qt_https_dd_//github.com/WebAssembly/design/issues/1231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/WebAssembly/design/issues/1231_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-09-19T07:46:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s my first real WASM test _lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/spsWasm.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/spsWasm.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCaution before clicking on the link _dd_ it_t_s a very big SPS with 40K solid particles_co_ this could freeze your browser. I_t_ll report more precisely about this experiment here _dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed5697248998_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/32817-sps-experiments/?do_eq_embed&amp_sm_comment_eq_228635&amp_sm_embedComment_eq_228635&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_223px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tAbout WASM itself _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I generated the WASM bytecode from some code ported from TS to AS_co_ _lt_a href_eq__qt_https_dd_//github.com/AssemblyScript/assemblyscript_qt_ rel_eq__qt_external nofollow_qt__gt_AssemblyScript _lt_/a_gt_. If the logic is quite simple to port from TS to AS (because the syntax is almost the same_co_ just add strong types like _qt_f32_qt__co_ _qt_u32_qt_ instead of _qt_number_qt__lt_/span_gt_)_co_ the shared memory access (shared between the JS main program and the WASM module) is really complex and painful. Indeed_co_ WASM knows only very basic numeric types only _dd_ i32_co_ u32_co_ f32_co_ f64_co_ etc and nothing about more complex structures like strings_co_ arrays_co_ objects. It_t_s really low level and we have to deal with pointers and offset to pick/store the data at the byte level directly in the memory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote also that there_t_s no garbage collector. This means that creating any _qt_object_qt_ (array_co_ instance of a class_co_ each time we type the word _qt_new_qt__co_ etc) in our logic will require to manually free the dynamically allocated memory to prevent memory leaks. Moreover WASM doesn_t_t provide any math library_co_ so no trigonometry at all (sine_co_ cosine_co_ tan_co_ everything required for 3D computations actually)_co_ so we have to implement by ourselves_co_ say_co_ the function sine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn brief_co_ for a developer coming from a productive high level language_co_ despite the help of the easy syntax of AS_co_ it_t_s a jump back in the past because the way to code it right looks more like some the C or the assembly way. Indeed_co_ the first version of this code_co_ very TS-like_co_ very twice slower than this more low-leveled published version.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can get the AS source here _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/index.ts    [EDITED]_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s said_co_ what about the gain ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are different versions and the FPS in my Chrome _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLegacy SPS   - 8 fps _lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/spsReference.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/spsReference.html_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tReference Buffer SPS - 7 fps _lt_span_gt__dd_  _lt_/span_gt__lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/spsBuffer.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/spsBuffer.html_lt_/a_gt__lt_span_gt_  fun to see that now the legacy SPS what has been optimized is faster than the lighter buffered one_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_WASM SPS -  31 fps _dd_ _lt_/span_gt__lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/spsWasm.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/spsWasm.html _lt_/a_gt__lt_span_gt_ it_t_s the port of the Buffer SPS in AS_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_perfs gain _eq_ x 4.42    ... not that bad_co_ finally _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Janx","Date":"2018-09-19T09:10:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tVery interesting. I get 45 FPS with the WASM SPS vs 12 with the legacy SPS. I would like to see the code_co_ but this link _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/index.ts_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/index.ts_lt_/a_gt_ gives me a 404.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-09-19T12:01:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry_co_ the right link is _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/SPSWasm/index.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn order to compare things with equity_co_ I measured the elapsed time on the part ported to WASM only (because some of the time is elapsed in the user logic that remains in the JS loop anyway _dd_ how do the particles move ?). This part is the engine_co_ what the SPS does for you under the hood whatever the logic you implement _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Buffer SPS internal computations _dd_  86-92 ms per frame_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Wasm SPS internal computations _dd_ 18 ms_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe isolated real gain of WASM is then a x5.44 speed increase.  That_t_s exactly what I expected from this port. Why ? because this is the expected average ratio between dynamically and statically typed languages in general (from x5 up to x20).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-09-19T12:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor those who might be curios about I finally achieve the painful data exchange between JS and the WASM module_co_ here_t_s the explanation directly in the AssemblyScript Github repo _lt_span_gt__dd_  _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/AssemblyScript/assemblyscript/issues/263#issuecomment-422786251_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/AssemblyScript/assemblyscript/issues/263#issuecomment-422786251_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wouldn_t_t have succeeded without the AS contributors help. Thanks to them.\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_width_dd_1px_sm_height_dd_1px_sm__qt__gt_\nhttps_dd_//github.com/AssemblyScript/assemblyscript/issues/263#issuecomment-422786251_lt_/pre_gt_\n\n_lt_pre style_eq__qt_width_dd_1px_sm_height_dd_1px_sm__qt__gt_\nhttps_dd_//github.com/AssemblyScript/assemblyscript/issues/263#issuecomment-422786251_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Leftover","Date":"2018-09-24T19:01:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDang dude!  You stuck it through.  Slings_co_ arrows and coral reefs.  Impressive.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]