import { FC, ReactElement, useRef } from 'react';
import dynamic from 'next/dynamic';
import { EditorRef, EmailEditorProps } from 'react-email-editor';
import StyledComponents from 'styled-components';
const EmailEditor = dynamic (() => import ('react-email-editor'))

import { useSeoAnalyzerContext } from '@/context/seo';
import styles from '@/./app/planning/planning.module.css';

const design = {
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
                                    "text": "<span><span><span><span><span><span><span>AdsGency AI</span></span></span></span></span></span></span>"
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
                                    "text": "<div>Artificial Intelligence (AI) is rapidly changing the way marketing and advertising agencies work. At AdsGency AI, we keep up.</div>"
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
                                    "text": "<strong>10x your Advertising Performance</strong>"
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
                                    "text": "<p style=\"line-height: 140%;\">Input your company website and brand description and choose the content type you want to optimize.</p>"
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
                                    "text": "<strong>Use the Power of AI to create Targeted Ads</strong>"
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
                                    "text": "<p style=\"line-height: 140%;\">Our AI uses your input to instantly generate recommendations based on your content type.</p>"
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
                                    "text": "<strong>You Have the Final Say</strong>"
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
                                    "text": "<p style=\"line-height: 140%;\">Choose which optimizations you want to implement and customize them easily to fit your business objectives.</p>"
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
                                    "text": "<strong>Launch your Content from 1 Platform</strong>"
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
                                    "text": "<p style=\"line-height: 140%;\">Launch and review your content with ease using our integrated advertising platform</p>"
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
                                    "text": "<strong>Launch your Content from 1 Platform</strong>"
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
                                    "text": "<p style=\"line-height: 140%;\">Launch and review your content with ease using our integrated advertising platform</p>"
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
                                    "text": "<span><span><span><span><span><span><span><span>AI in Advertising</span></span></span></span></span></span></span></span>"
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
                                    "text": "<p style=\"line-height: 140%;\">As a marketer myself, I appreciate the value of effortlessly creating engaging ads, maximizing ROI, and gaining data-driven insights for multichannel marketing.</p>"
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

const StyledEditorWrapper = StyledComponents.div`
  &>div {
    width: 100%;
  }
`;

const InfographicsRecommendation = () => {
  const { infographics } = useSeoAnalyzerContext();
  const emailEditorRef = useRef<EditorRef | null>(null);

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    unlayer.loadDesign(infographics as any);
    if (emailEditorRef.current) {
      emailEditorRef.current.editor = unlayer;
    } else {
      emailEditorRef.current = {
        editor: unlayer
      }
    }
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    const editorIframe = document.getElementById("email-editor");
    const emailEditor = document.getElementById('editor-2');
    if (emailEditor) {
      emailEditor.style.position = 'relative';
    }
    setTimeout(() => {
      const newLogo = document.createElement('div');
      newLogo.id = "adsgency-logo";
      newLogo.style.width = '425px';
      newLogo.style.height = '50px';
      newLogo.style.background = 'rgb(238, 238, 238)';
      newLogo.style.position = 'absolute';
      newLogo.style.right = '0';
      newLogo.style.bottom = '0';
      newLogo.style.display = 'inline-flex';
      newLogo.style.justifyContent = 'center';
      newLogo.style.alignItems = 'center';
      newLogo.innerHTML = '<img alt="logo" loading="lazy" width="132" height="28" decoding="async" data-nimg="1" src="/logo_black.svg" style="color: transparent;">';

      if (editorIframe) {
        editorIframe.style.position = "relative";
        editorIframe.appendChild(newLogo);
      }
    }, 100);
  };

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      <StyledEditorWrapper className={`${styles.mainDiv} w-full !p-0`}>
        <EmailEditor options={{ className: "w-full" }} onLoad={onLoad} onReady={onReady} />
      </StyledEditorWrapper>
    </div>
  );
};

export default InfographicsRecommendation;
