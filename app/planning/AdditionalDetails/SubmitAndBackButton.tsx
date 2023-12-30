import React, { FC, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { Spin, message } from 'antd';

import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import axios from '@/lib/axios';
import { formValidUrl } from '@/utils';
import LoadingSpin from '../LoadingSpin';
import styles from './SubmitAndBackButton.module.css';
import type { CompanyForm, CompanyDetailForm } from '@/types/planning';

interface SubmitAndBackButtonProps {
  activeButtonIndex: number;
  setActiveButtonIndex: (activeButtonIndex: number) => void; // Define setSearchQuery function with a searchQuery argument
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  formData: CompanyDetailForm;
}

const infographics_template = {
    "counters": {
        "u_row": 13,
        "u_column": 21,
        "u_content_menu": 1,
        "u_content_text": 30,
        "u_content_image": 11,
        "u_content_button": 2,
        "u_content_divider": 1,
        "u_content_heading": 9
    },
    "body": {
        "id": "0QFAKPxyzM",
        "rows": [
            {
                "id": "Rd4HAvqb8t",
                "cells": [
                    1,
                    1
                ],
                "columns": [
                    {
                        "id": "_t6kskqCwL",
                        "contents": [
                            {
                                "id": "mduwd2lwJL",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://assets.unlayer.com/stock-templates/1703644631955-Leonardo_Diffusion_XL_create_an_instagram_ad_image_for_this_ca_1%20(2).jpg",
                                        "width": 1344,
                                        "height": 896
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_9",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }
                        ],
                        "values": {
                            "_meta": {
                                "htmlID": "u_column_4",
                                "htmlClassNames": "u_column"
                            },
                            "border": {},
                            "padding": "0px",
                            "borderRadius": "0px",
                            "backgroundColor": ""
                        }
                    },
                    {
                        "id": "xeCNpoBPAK",
                        "contents": [
                            {
                                "id": "3uu85Zj_gl",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "39px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_4",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span><span><span><span><span><span><span>AdsGency AI</span></span></span></span></span></span></span>",
                                    "elementType": "header title"
                                }
                            },
                            {
                                "id": "uoh6Zna-hH",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_25",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<div>Artificial Intelligence (AI) is rapidly changing the way marketing and advertising agencies work. At AdsGency AI, we keep up.</div>",
                                    "elementType": "header description"
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_14",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#540aee",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "15px 15px 32px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_3",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            },
            {
                "id": "UjBMFGVATN",
                "cells": [
                    1
                ],
                "columns": [
                    {
                        "id": "7sDsmi2I2b",
                        "contents": [
                            {
                                "id": "TqU29SuQOh",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "22px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_5",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<strong>10x your Advertising Performance</strong>",
                                    "elementType": "item"
                                }
                            },
                            {
                                "id": "N4n--4WVsw",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontFamily": {
                                        "label": "Arial",
                                        "value": "arial,helvetica,sans-serif",
                                        "url": "",
                                        "defaultFont": true
                                    },
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_26",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Input your company website and brand description and choose the content type you want to optimize.</p>",
                                    "elementType": "description"
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px 0px 32px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_16",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "_meta": {
                        "htmlID": "u_row_9",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            },
            {
                "id": "Spu3uLqQn7",
                "cells": [
                    1
                ],
                "columns": [
                    {
                        "id": "2UVgOviNfQ",
                        "contents": [
                            {
                                "id": "LvCOaJqeFI",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "22px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_6",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<strong>Use the Power of AI to create Targeted Ads</strong>",
                                    "elementType": "item"
                                }
                            },
                            {
                                "id": "9VSRfl3cYi",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_27",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Our AI uses your input to instantly generate recommendations based on your content type.</p>",
                                    "elementType": "description"
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px 0px 32px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_17",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "_meta": {
                        "htmlID": "u_row_10",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            },
            {
                "id": "Ka7YkUtEum",
                "cells": [
                    1
                ],
                "columns": [
                    {
                        "id": "1DkMxrPmxC",
                        "contents": [
                            {
                                "id": "otffBtxtkC",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "22px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_8",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<strong>You Have the Final Say</strong>",
                                    "elementType": "item"
                                }
                            },
                            {
                                "id": "jUU5LG3wfj",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_29",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Choose which optimizations you want to implement and customize them easily to fit your business objectives.</p>",
                                    "elementType": "description"
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px 0px 32px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_19",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "_meta": {
                        "htmlID": "u_row_12",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            },
            {
                "id": "F0uzy9AZKe",
                "cells": [
                    1
                ],
                "columns": [
                    {
                        "id": "dHsYy95eSK",
                        "contents": [
                            {
                                "id": "5gV38LJmHf",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "22px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_7",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<strong>Launch your Content from 1 Platform</strong>",
                                    "elementType": "item"
                                }
                            },
                            {
                                "id": "r8Mx-QdTLi",
                                "type": "text",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_28",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">Launch and review your content with ease using our integrated advertising platform</p>",
                                    "elementType": "description"
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px 0px 32px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_18",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "_meta": {
                        "htmlID": "u_row_11",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            },
            {
                "id": "PZcyAMuI2u",
                "cells": [
                    1,
                    1
                ],
                "columns": [
                    {
                        "id": "2yJ3mhsmzh",
                        "contents": [
                            {
                                "id": "y6iJEUl5_R",
                                "type": "heading",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "headingType": "h1",
                                    "fontSize": "39px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_heading_9",
                                        "htmlClassNames": "u_content_heading"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<span><span><span><span><span><span><span><span>AI in Advertising</span></span></span></span></span></span></span></span>",
                                    "elementType": "footer title"
                                }
                            },
                            {
                                "id": "MoxHyvjKWq",
                                "type": "text",
                                "values": {
                                    "containerPadding": "10px",
                                    "anchor": "",
                                    "fontSize": "14px",
                                    "textAlign": "left",
                                    "lineHeight": "140%",
                                    "linkStyle": {
                                        "inherit": true,
                                        "linkColor": "#0000ee",
                                        "linkHoverColor": "#0000ee",
                                        "linkUnderline": true,
                                        "linkHoverUnderline": true
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_text_30",
                                        "htmlClassNames": "u_content_text"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true,
                                    "text": "<p style=\"line-height: 140%;\">As a marketer myself, I appreciate the value of effortlessly creating engaging ads, maximizing ROI, and gaining data-driven insights for multichannel marketing.</p>",
                                    "elementType": "footer description"
                                }
                            }
                        ],
                        "values": {
                            "_meta": {
                                "htmlID": "u_column_20",
                                "htmlClassNames": "u_column"
                            },
                            "border": {},
                            "padding": "0px",
                            "borderRadius": "0px",
                            "backgroundColor": ""
                        }
                    },
                    {
                        "id": "hPHsaQm0RH",
                        "contents": [
                            {
                                "id": "c5P2qnml0e",
                                "type": "image",
                                "values": {
                                    "containerPadding": "0px",
                                    "anchor": "",
                                    "src": {
                                        "url": "https://assets.unlayer.com/stock-templates/1703644969502-Image%20(11).png",
                                        "width": 175,
                                        "height": 184,
                                        "autoWidth": false,
                                        "maxWidth": "59%"
                                    },
                                    "textAlign": "center",
                                    "altText": "",
                                    "action": {
                                        "name": "web",
                                        "values": {
                                            "href": "",
                                            "target": "_blank"
                                        }
                                    },
                                    "displayCondition": null,
                                    "_meta": {
                                        "htmlID": "u_content_image_11",
                                        "htmlClassNames": "u_content_image"
                                    },
                                    "selectable": true,
                                    "draggable": true,
                                    "duplicatable": true,
                                    "deletable": true,
                                    "hideable": true
                                }
                            }
                        ],
                        "values": {
                            "backgroundColor": "",
                            "padding": "0px",
                            "border": {},
                            "borderRadius": "0px",
                            "_meta": {
                                "htmlID": "u_column_21",
                                "htmlClassNames": "u_column"
                            }
                        }
                    }
                ],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "15px 15px 32px",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_13",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }
        ],
        "headers": [],
        "footers": [],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": 700,
            "fontFamily": {
                "label": "Helvetica",
                "value": "helvetica,sans-serif",
                "url": "",
                "weights": null,
                "defaultFont": true
            },
            "textColor": "#ffffff",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "cover",
                "position": "center"
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#000000",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0071e3",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true,
                "inherit": false
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    "schemaVersion": 16
};

const SubmitAndBackButton: FC<SubmitAndBackButtonProps> = ({
  activeButtonIndex,
  setActiveButtonIndex,
  formik,
  formData,
}) => {
  const { setOnpage, setOffpage, setCompany, company, setEmailInstruction, setSocialMedia, setInfographics, setLandingPage } =
    useSeoAnalyzerContext();
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isValidSeo = (content_type: string, errors: any) =>
    content_type.toLowerCase() == 'seo' &&
    errors.idealCustomerProfile == '' &&
    errors.targetAudience == '' &&
    errors.competitors == ''

  const isValidEmailMarketing = (content_type: string, errors: any) =>
    content_type.toLowerCase() == 'email marketing' &&
    errors.idealCustomerProfile == '' &&
    errors.targetAudience == '' &&
    errors.email == '' &&
    errors.marketing_template == ''

  const isValidSocialMedia = (content_type: string, values: any, errors: any) =>
    content_type.toLowerCase() == 'social media' &&
    Object.keys(values.schedule).length > 0 &&
    errors.idealCustomerProfile == '' &&
    errors.targetAudience == '' &&
    errors.url == ''

  const isValidInfographics = (formData: any, company: CompanyDetailForm, _values: any, errors: any) =>
    formData.content_type.toLowerCase() === 'infographics' &&
    formData.infographics_styles.length > 0 &&
    company.assets.length > 0 &&
    errors.targetAudience === '' &&
    errors.idealCustomerProfile === ''

  const isValidLandingPage = (content_type: string, company: CompanyDetailForm, errors: any) =>
    content_type.toLowerCase() === 'landing page' &&
    company.assets.length > 0 &&
    errors.targetAudience === '' &&
    errors.idealCustomerProfile === '' &&
    errors.competitors === ''

  const isValid = useMemo(() => {
    return isValidSeo(formData.content_type, formik.errors) || isValidEmailMarketing(formData.content_type, formik.errors) || isValidSocialMedia(formData.content_type, formik.values, formik.errors) || isValidInfographics(formData, company, formik.values, formik.errors) || isValidLandingPage(formData.content_type, company, formik.errors);
  }, [formData, formik.values, formik.errors, company])

  const handleSubmit = (index: number) => {
    if (isValidSeo(formData.content_type, formik.errors)) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        business_objectives: formData.business_objectives,
        competitors: formik.values.competitors,
        content_type: formData.content_type,
        customer_profile: formik.values.idealCustomerProfile,
        description: formik.values.description,
        product_description: formik.values.sellingDescription,
        target_audice: formik.values.targetAudience,
        website: formik.values.websiteURL,
      });
      axios
        .post('/fapi/seo_onpage_analyze_api', {
          company_name: formik.values.companyName,
          company_description: formik.values.description,
          target_audience: formik.values.targetAudience,
          customer_profile: formik.values.idealCustomerProfile,
          competitor: formik.values.competitors,
          business_objectives: formData.business_objectives.join(','),
          website_url: formValidUrl(formik.values.websiteURL),
        })
        .then((res) => {
          if (res.data.status == true) {
            setOnpage(res.data.issues);
            const offpages = JSON.parse(res.data.strategies);
            let temp: Array<SeoAnalysis> = [];
            Object.keys(offpages).map((key) => {
              temp.push({
                url: key,
                warnings: offpages[key],
              });
            });
            setOffpage(temp);
            setActiveButtonIndex(index);
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /seo_onpage_analyze_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (isValidEmailMarketing(formData.content_type, formik.errors)) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        business_objectives: formData.business_objectives,
        competitors: formik.values.competitors,
        content_type: formData.content_type,
        customer_profile: formik.values.idealCustomerProfile,
        description: formik.values.description,
        product_description: formik.values.sellingDescription,
        target_audice: formik.values.targetAudience,
        website: formik.values.websiteURL,
        email: formik.values.email,
        marketing_template: formik.values.marketing_template,
        schedule: formik.values.schedule,
        url: formik.values.url
      });
      axios
        .post('/fapi/email_marketing_instruction_api', {
          company_name: formik.values.companyName,
          company_description: formik.values.description,
          target_audience: formik.values.targetAudience,
          customer_profile: formik.values.idealCustomerProfile,
          business_objectives: formData.business_objectives.join(','),
          website_url: formValidUrl(formik.values.websiteURL),
          email_address: formik.values.email,
          email_template: formik.values.marketing_template
        })
        .then((res) => {
          if (res.data.status == true) {
            const instruction = JSON.parse(res.data.instruction);
            setEmailInstruction(instruction);
            setActiveButtonIndex(index);
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /email_marketing_instruction_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (isValidSocialMedia(formData.content_type, formik.values, formik.errors)) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        business_objectives: formData.business_objectives,
        competitors: formik.values.competitors,
        content_type: formData.content_type,
        customer_profile: formik.values.idealCustomerProfile,
        description: formik.values.description,
        product_description: formik.values.sellingDescription,
        target_audice: formik.values.targetAudience,
        website: formik.values.websiteURL,
        email: formik.values.email,
        marketing_template: formik.values.marketing_template,
        schedule: formik.values.schedule,
        url: formik.values.url
      });

      const bodyData = new FormData()
      bodyData.append('company_name', formik.values.companyName);
      bodyData.append('company_description', formik.values.description);
      bodyData.append('target_audience', formik.values.targetAudience);
      bodyData.append('customer_profile', formik.values.idealCustomerProfile);
      bodyData.append('business_objectives', formData.business_objectives.join(','));
      bodyData.append('website_url', formValidUrl(formik.values.websiteURL));
      bodyData.append('email_address', formik.values.email);
      bodyData.append('email_template', formik.values.marketing_template);
      company.assets.forEach((asset) => {
        bodyData.append('media', asset);
      });

      axios
        .post('/fapi/pinterest_get_instructions_api', bodyData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          if (res.data.status == true) {
            setSocialMedia(res.data.recommendations.map((rec: any) => ({
              content: JSON.parse(rec.content),
              img_url: process.env.NEXT_PUBLIC_API_URL + rec.img_url
            })));
            setActiveButtonIndex(index);
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /social_media_instruction_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (isValidInfographics(formData, company, formik.values, formik.errors)) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        website: formik.values.websiteURL,
        business_objectives: formData.business_objectives,
        infographics_styles: formData.infographics_styles,
        target_audice: formik.values.targetAudience,
        content_type: formData.content_type,
        customer_profile: formik.values.idealCustomerProfile,
        description: formik.values.description
      });

      const bodyData = new FormData()
      bodyData.append('company_name', formik.values.companyName);
      bodyData.append('website_url', formValidUrl(formik.values.websiteURL));
      bodyData.append('company_description', formik.values.description);
      bodyData.append('target_audience', formik.values.targetAudience);
      bodyData.append('customer_profile', formik.values.idealCustomerProfile);
      bodyData.append('business_objectives', formData.business_objectives.join(','));
      bodyData.append('infographics_styles', formData.infographics_styles.join(','));
      company.assets.forEach((asset) => {
        bodyData.append('media', asset);
      });

      const getCustomizedInfographicsTemplate = (infographicsTagsObj: Object) => {
        let customizedInfographicsTemplate = { ...infographics_template };
        const customizeInfographicsTemplate = (templateObj: any) => {
          for (var key in templateObj) {
            if (typeof templateObj[key] === 'object') {
              customizeInfographicsTemplate(templateObj[key]);
            } else {
              if (key === 'elementType') {
                const elementType: string = templateObj['elementType'];
                const infographicsTagsKeys: string[] = Object.keys(infographicsTagsObj);
                const index = infographicsTagsKeys.findIndex((key: string) => key == elementType || key.startsWith(elementType));
                if (index > -1) {
                  templateObj['text'] = (infographicsTagsObj as any)[infographicsTagsKeys[index]];
                  delete (infographicsTagsObj as any)[infographicsTagsKeys[index]];
                }
              }
            }
          }
        }

        customizeInfographicsTemplate(customizedInfographicsTemplate);

        return customizedInfographicsTemplate;
      }

      axios
        .post('/fapi/infograhics_get_instructions_api', bodyData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          if (res.data.status == true) {
            try {
              const infographics_string = res.data.infographic;
              const infographics_obj = JSON.parse(infographics_string);
              setInfographics(getCustomizedInfographicsTemplate(infographics_obj));
            } catch {

            }
            setActiveButtonIndex(index);
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /social_media_instruction_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (isValidLandingPage(formData.content_type, company, formik.errors)) {
      setIsLoading(true);
      setCompany({
        ...company,
        name: formik.values.companyName,
        website: formik.values.websiteURL,
        business_objectives: formData.business_objectives,
        competitors: formik.values.competitors,
        infographics_styles: formData.infographics_styles,
        target_audice: formik.values.targetAudience,
        content_type: formData.content_type,
        customer_profile: formik.values.idealCustomerProfile,
        description: formik.values.description
      });

      const bodyData = new FormData()
      bodyData.append('company_name', formik.values.companyName);
      bodyData.append('website_url', formValidUrl(formik.values.websiteURL));
      bodyData.append('company_description', formik.values.description);
      bodyData.append('target_audience', formik.values.targetAudience);
      bodyData.append('customer_profile', formik.values.idealCustomerProfile);
      bodyData.append('competitor', formik.values.competitors);
      bodyData.append('business_objectives', formData.business_objectives.join(','));
      company.assets.forEach((asset) => {
        bodyData.append('media', asset);
      });

      const getCustomizedInfographicsTemplate = (infographicsTagsObj: Object) => {
        let customizedInfographicsTemplate = { ...infographics_template };
        const customizeInfographicsTemplate = (templateObj: any) => {
          for (var key in templateObj) {
            if (typeof templateObj[key] === 'object') {
              customizeInfographicsTemplate(templateObj[key]);
            } else {
              if (key === 'elementType') {
                const elementType: string = templateObj['elementType'];
                const infographicsTagsKeys: string[] = Object.keys(infographicsTagsObj);
                const index = infographicsTagsKeys.findIndex((key: string) => key == elementType || key.startsWith(elementType));
                if (index > -1) {
                  templateObj['text'] = (infographicsTagsObj as any)[infographicsTagsKeys[index]];
                  delete (infographicsTagsObj as any)[infographicsTagsKeys[index]];
                }
              }
            }
          }
        }

        customizeInfographicsTemplate(customizedInfographicsTemplate);

        return customizedInfographicsTemplate;
      }

      axios
        .post('/fapi/landingpage_get_instructions_api', bodyData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res) => {
          if (res.data.status == true) {
            try {
              const landingpage_string = res.data.landingpage;
              const landingpage_obj = JSON.parse(landingpage_string);
              setLandingPage(getCustomizedInfographicsTemplate(landingpage_obj));
            } catch {

            }
            setActiveButtonIndex(index);
          } else {
            messageApi.error(res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong');
          console.warn('Error from /social_media_instruction_api', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log('Please fill required fields', formik.errors);
    }
  };

  return (
    <div className="flex items-center gap-10 self-stretch mt-[32px]">
      {contextHolder}
      {isLoading && <LoadingSpin />}
      <p className="w-[619px] text-[color:var(--primary-50,#F7F7FF)] h-[18px] text-[15px] not-italic font-medium leading-[normal]">
        Submit related helpful information to help us improve your
        recommendations!
      </p>
      <button
        className="flex h-11 justify-center items-center gap-4 flex-[1_0_0] border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
        onClick={() => {
          router.push('/home');
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          handleSubmit(activeButtonIndex + 1);
        }}
        className={`${styles.submit} ${!isValid ? '!bg-background-300' : '!bg-primary-purple'}`}
        disabled={!isValid}
      >
        {formData.content_type.toLowerCase() === 'infographics' ? 'Generate Infographics' : 'Submit'}
      </button>
    </div>
  );
};

export default SubmitAndBackButton;
