[{"Owner":"Hagop","Date":"2016-10-08T15:02:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a number of questions on binary and incremental conversion\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a scene with a number of meshes which I exported to a file after serializing.I used the _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_makeincremental _lt_/span_gt_tool (after adding Newtonsoft jhost) and converted my scene to incremental. I had a performance gain of 40% which is excellent. My initial questions are\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tmy incremental files have extension _lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_babylongeometrydata _lt_/span_gt_and not _lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_babylonmeshdata_lt_/span_gt_. What is the difference?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tthe _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_makeincremental _lt_/span_gt_command seems to use a [_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_textures_lt_/span_gt_] parameter_co_ but I don_t_t see it being used in the _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_.cs source _lt_/span_gt_file.\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tNow I want to convert my original scene to binary format to get even better performance\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tdo I need to use the original scene file (ie_dd_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.babylon_lt_/span_gt_) or do I process the incremental file (ie_dd_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.incremental.babylon_lt_/span_gt_)?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI get the following error when I run_lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_ converttobinary.exe_lt_/span_gt_ on either _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.babylon _lt_/span_gt_or _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.incremental.babylon_lt_/span_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t_lt_em_gt__lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_Cannot perform runtime binding on a null reference_lt_/span_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_Microsoft.CSharp.RuntimeBinder.RuntimeBinderException_dd_ Cannot perform runtime bi_lt_br /_gt_\n\tnding on a null reference_lt_br /_gt_\n\t   at CallSite.Target(Closure _co_ CallSite _co_ Object )_lt_br /_gt_\n\t   at ConvertToBinary.Program.Extract(String srcPath_co_ String dstPath_co_ String obj_lt_br /_gt_\n\tName_co_ Object meshObj_co_ Boolean isMesh) in C_dd_\\ConvertToBinary\\Program.cs_dd_line 191_lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9775_qt__gt_exp7storey_11r1.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-10T16:27:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Generally speaking_dd_ no difference. Internally this is used by geometry (basic shapes or shared data) and pure mesh data (when not shared)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Not implemented  (Yet) _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t3. You have to process initial file\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. can you debug it? (Source are available on the repo)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2016-10-11T21:13:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think there is a bug in the converter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe following line causing the _lt_em_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_null reference_lt_/span_gt__lt_/em_gt_  error when meshObj.id is valid and _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_meshObj.name _lt_/em_gt__lt_/span_gt__lt_em_gt_is null_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_ meshName _eq_ meshObj.name.ToString()_sm_ _lt_/em_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_I fixed it this way_lt_/em_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  string meshName _eq_ _qt__qt__sm__lt_br /_gt_\n\t                if(meshObj.name !_eq_null)_lt_br /_gt_\n\t                {_lt_br /_gt_\n\t                     meshName _eq_ meshObj.name.ToString()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                    meshName _eq_ meshName.Trim()_sm__lt_br /_gt_\n\t                    if (meshName.Length &gt_sm_ 40)_lt_br /_gt_\n\t                        meshName _eq_ meshName.Substring(0_co_ 40)_sm__lt_br /_gt_\n\t                }\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-13T17:12:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPlease submit a PR for this fix _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-01-23T19:26:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_147000_qt_ data-ipsquote-contentid_eq__qt_25643_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476220389_qt_ data-ipsquote-userid_eq__qt_15947_qt_ data-ipsquote-username_eq__qt_Hagop_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11/10/2016 at 11_dd_13 PM_co_ Hagop said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think there is a bug in the converter.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe following line causing the _lt_em_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_null reference_lt_/span_gt__lt_/em_gt_  error when meshObj.id is valid and _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_meshObj.name _lt_/em_gt__lt_/span_gt__lt_em_gt_is null_lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_ meshName _eq_ meshObj.name.ToString()_sm_ _lt_/em_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_I fixed it this way_lt_/em_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t  string meshName _eq_ _qt__qt__sm__lt_br /_gt_\n\t\t\t                if(meshObj.name !_eq_null)_lt_br /_gt_\n\t\t\t                {_lt_br /_gt_\n\t\t\t                     meshName _eq_ meshObj.name.ToString()_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t                    meshName _eq_ meshName.Trim()_sm__lt_br /_gt_\n\t\t\t                    if (meshName.Length &gt_sm_ 40)_lt_br /_gt_\n\t\t\t                        meshName _eq_ meshName.Substring(0_co_ 40)_sm__lt_br /_gt_\n\t\t\t                }\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI have got almost the same problem_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFatal error encountered_dd__lt_br /_gt_\n\t\t\tCannot perform runtime binding on a null reference\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tbut there is no this string in the source file_dd_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_ meshName _eq_ meshObj.name.ToString()_sm_ _lt_/em_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere is even no _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_em_gt_meshObj_lt_/em_gt__lt_/span_gt_ in the file Program.cs\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-01-23T19:59:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_146609_qt_ data-ipsquote-contentid_eq__qt_25643_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1475938966_qt_ data-ipsquote-userid_eq__qt_15947_qt_ data-ipsquote-username_eq__qt_Hagop_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 08/10/2016 at 5_dd_02 PM_co_ Hagop said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI have a number of questions on binary and incremental conversion\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI have a scene with a number of meshes which I exported to a file after serializing.I used the _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_makeincremental _lt_/span_gt_tool (after adding Newtonsoft jhost) and converted my scene to incremental. I had a performance gain of 40% which is excellent. My initial questions are\n\t\t_lt_/p_gt_\n\n\t\t_lt_ul_gt__lt_li_gt_\n\t\t\t\tmy incremental files have extension _lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_babylongeometrydata _lt_/span_gt_and not _lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_babylonmeshdata_lt_/span_gt_. What is the difference?\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tthe _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_makeincremental _lt_/span_gt_command seems to use a [_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_textures_lt_/span_gt_] parameter_co_ but I don_t_t see it being used in the _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_.cs source _lt_/span_gt_file.\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt__lt_p_gt_\n\t\t\tNow I want to convert my original scene to binary format to get even better performance\n\t\t_lt_/p_gt_\n\n\t\t_lt_ul_gt__lt_li_gt_\n\t\t\t\tdo I need to use the original scene file (ie_dd_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.babylon_lt_/span_gt_) or do I process the incremental file (ie_dd_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.incremental.babylon_lt_/span_gt_)?\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tI get the following error when I run_lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_ converttobinary.exe_lt_/span_gt_ on either _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.babylon _lt_/span_gt_or _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_somefile.incremental.babylon_lt_/span_gt_\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt__lt_p_gt_\n\t\t\t_lt_em_gt__lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt_Cannot perform runtime binding on a null reference_lt_/span_gt__lt_/em_gt__lt_br /_gt__lt_em_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_Microsoft.CSharp.RuntimeBinder.RuntimeBinderException_dd_ Cannot perform runtime bi_lt_br /_gt_\n\t\t\tnding on a null reference_lt_br /_gt_\n\t\t\t   at CallSite.Target(Closure _co_ CallSite _co_ Object )_lt_br /_gt_\n\t\t\t   at ConvertToBinary.Program.Extract(String srcPath_co_ String dstPath_co_ String obj_lt_br /_gt_\n\t\t\tName_co_ Object meshObj_co_ Boolean isMesh) in C_dd_\\ConvertToBinary\\Program.cs_dd_line 191_lt_/span_gt__lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9775_qt_ data-fileid_eq__qt_9775_qt_ rel_eq__qt__qt__gt_exp7storey_11r1.babylon_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/15947-hagop/?do_eq_hovercard_qt_ data-mentionid_eq__qt_15947_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/15947-hagop/_qt_ rel_eq__qt__qt__gt_@Hagop_lt_/a_gt_ may be you have an executable file to share with me?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-01-23T20:49:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160491_qt_ data-ipsquote-contentid_eq__qt_25643_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485201579_qt_ data-ipsquote-userid_eq__qt_24621_qt_ data-ipsquote-username_eq__qt_iTekVR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t48 minutes ago_co_ iTekVR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/15947-hagop/?do_eq_hovercard_qt_ data-mentionid_eq__qt_15947_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/15947-hagop/_qt_ rel_eq__qt__qt__gt_@Hagop_lt_/a_gt_ may be you have an executable file to share with me?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tboth ConvertToBinary and MakeIncremental don_t_t work....\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-01-23T20:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160502_qt_ data-ipsquote-contentid_eq__qt_25643_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485204566_qt_ data-ipsquote-userid_eq__qt_24621_qt_ data-ipsquote-username_eq__qt_iTekVR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ iTekVR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tboth _lt_strong_gt_ConvertToBinary _lt_/strong_gt_and MakeIncremental don_t_t work....\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tline 101_dd_                     if (mesh.checkCollisions.Value) // Do not delay load collisions object\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Visam","Date":"2017-01-23T20:57:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160502_qt_ data-ipsquote-contentid_eq__qt_25643_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485204566_qt_ data-ipsquote-userid_eq__qt_24621_qt_ data-ipsquote-username_eq__qt_iTekVR_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 minutes ago_co_ iTekVR said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tboth ConvertToBinary and _lt_strong_gt_MakeIncremental _lt_/strong_gt_don_t_t work....\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tline 227_dd_   if (mesh.checkCollisions.Value) // Do not delay load collisions object\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2017-01-24T11:12:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tiTekVr_co_ I will reply to you in 2 days if you don_t_t mind.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-01-26T12:31:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti stream sometimes movies up to 1_co_5GB \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.flipcode.com/archives/The_Half-Edge_Data_Structure.shtml_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.flipcode.com/archives/The_Half-Edge_Data_Structure.shtml_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/tolkanabroski/coding/blob/master/webgl-xp/testpage/cat.json_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/tolkanabroski/coding/blob/master/webgl-xp/testpage/cat.json_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgood luck_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-01-26T12:42:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyou can also stream singel LODs of the mesh and then merge them them in real time. google it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hagop","Date":"2017-01-29T07:55:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tiTekVr_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOK_co_ so I had a scene with multiple meshes which I serialized and exported as a babylon file\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar serializedScene _eq_ BABYLON.SceneSerializer.Serialize(scene)_sm__lt_br /_gt_\n\tvar strScene _eq_ JSON.stringify(serializedScene)_sm_     _lt_br /_gt_\n\t            _lt_br /_gt_\n\t           var filename _eq_ globalRackExportName_sm__lt_br /_gt_\n\t           saveBlob(filename_co_strScene)_sm__lt_br /_gt_\n\t             _lt_br /_gt_\n\t        _lt_br /_gt_\n\t function saveBlob(filename_co_strScene)_lt_br /_gt_\n\t        {_lt_br /_gt_\n\t                var blob _eq_ new Blob ( [ strScene ]_co_ { type _dd_ _qt_octet/stream_qt_ } )_sm_           // turn blob into an object URL_sm_ saved as a member_co_ so can be cleaned out later    _lt_br /_gt_\n\t                var objectUrl _eq_ (window.webkitURL || window.URL).createObjectURL(blob)_sm__lt_br /_gt_\n\t                var link _eq_ window.document.createElement(_t_a_t_)_sm_    _lt_br /_gt_\n\t                link.href _eq_ objectUrl_sm_    _lt_br /_gt_\n\t                link.download _eq_ filename_sm_    _lt_br /_gt_\n\t                var click _eq_ document.createEvent(_qt_MouseEvents_qt_)_sm_    _lt_br /_gt_\n\t                click.initEvent(_qt_click_qt__co_ true_co_ false)_sm_    _lt_br /_gt_\n\t                link.dispatchEvent(click)_sm_  _lt_br /_gt_\n\t                return_sm__lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is important for you to understand at this point is that_co_ since the scene was in the memory of the PC_co_ the exported babylon file contains geometry data (vertex) and not mesh data. The ConvertToBinary &amp_sm_ MakeIncremental utilties will treat the input as geometry and not mesh data and export in babylonbinarygeometrydata &amp_sm_ babylongeometrydata respectively. However_co_ at the time I was working with BABYLON.JS ver. 2.4_co_ Babylon could not process babylonbinarygeometrydata but ony babylonbinarymeshdata.So I  _qt_tricked _qt_ the system_co_ so that the output file name was babylonbinarymeshdata_co_ but I continued using the geometry data in my exported scene file and I had a huge gain in performance. Attached in the cs file you can open in Visual Studio which includes the bug fix mentioned above.Finally be remined that you can use the command\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.Append(_qt_productshr/_qt__co_ sceneVar_co_ scene_co_ function (newScene) {}  to append the converted files to your existing scene_co_ where sceneVar is the entry point name of your converted file (either incremental or binary).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps !\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11404_qt__gt_Program.cs_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]