// POST http://localhost:1337/restaurants
var REQUEST_SHAPE_IM_AIMING_FOR = JSON.parse({
  "title": "Restaurant 1",
  "cover": 1,
  "content": [
    {
      "__component": "content.title-with-subtitle",
      "title": "Restaurant 1 title",
      "subTitle": "Cozy restaurant in the valley"
    },
    {
      "__component": "content.image-with-description",
      "image": 1, // user form data to upload the file or an id to reference an exisiting image
      "title": "Amazing photography",
      "description": "This is an amazing photography taken..."
    }
  ],
  "opening_hours": [
    {
      "day_interval": "Tue - Sat",
      "opening_hour": "7:30 PM",
      "closing_hour": "10:00 PM"
    }
  ]
})

var ContentTypes = JSON.parse({
  "data": {
    "contentType": {
      "uid": "application::portal-page-settings.portal-page-settings",
      "apiID": "portal-page-settings",
      "schema": {
        "collectionName": "portal_page_settings",
        "info": {
          "name": "Portal Page Settings"
        },
        "attributes": {
          "id": {
            "type": "integer"
          },
          "Subscriptions": {
            "type": "component",
            "repeatable": false,
            "component": "pages.subscription-page"
          },
          "Account": {
            "type": "component",
            "repeatable": false,
            "component": "sections.account"
          },
          "Orders": {
            "type": "component",
            "repeatable": false,
            "component": "sections.orders"
          },
          "Title": {
            "type": "string",
            "default": "Page Settings"
          },
          "users": {
            "plugin": "users-permissions",
            "collection": "user",
            "via": "portal_page_setting",
            "isVirtual": true,
            "type": "relation",
            "targetModel": "plugins::users-permissions.user",
            "relationType": "oneToMany"
          },
          "created_at": {
            "type": "timestamp"
          },
          "updated_at": {
            "type": "timestamp"
          }
        }
      }
    },
    "components": {
      "pages.subscription-page": {
        "uid": "pages.subscription-page",
        "category": "pages",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_pages_subscription_pages",
          "info": {
            "name": "subscriptionPage",
            "icon": "arrow-alt-circle-up"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Subscriptions": {
              "type": "component",
              "repeatable": false,
              "component": "sections.subscriptions",
              "required": true
            },
            "Swap": {
              "type": "component",
              "repeatable": false,
              "component": "sections.swap"
            },
            "Addons": {
              "type": "component",
              "repeatable": false,
              "component": "sections.addons"
            },
            "Modifications": {
              "type": "component",
              "repeatable": false,
              "component": "sections.upgrades"
            },
            "Shipment": {
              "type": "component",
              "repeatable": false,
              "component": "sections.next-shipment"
            },
            "Banner": {
              "type": "component",
              "repeatable": false,
              "component": "components.banner"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "id",
          "defaultSortBy": "id",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Subscriptions": {
            "edit": {
              "label": "Subscriptions",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Subscriptions",
              "searchable": false,
              "sortable": false
            }
          },
          "Swap": {
            "edit": {
              "label": "Swap",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Swap",
              "searchable": false,
              "sortable": false
            }
          },
          "Addons": {
            "edit": {
              "label": "Addons",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Addons",
              "searchable": false,
              "sortable": false
            }
          },
          "Modifications": {
            "edit": {
              "label": "Modifications",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Modifications",
              "searchable": false,
              "sortable": false
            }
          },
          "Shipment": {
            "edit": {
              "label": "Shipment",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Shipment",
              "searchable": false,
              "sortable": false
            }
          },
          "Banner": {
            "edit": {
              "label": "Banner",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Banner",
              "searchable": false,
              "sortable": false
            }
          }
        },
        "layouts": {
          "list": [
            "id"
          ],
          "edit": [
            [
              {
                "name": "Subscriptions",
                "size": 12
              }
            ],
            [
              {
                "name": "Swap",
                "size": 12
              }
            ],
            [
              {
                "name": "Addons",
                "size": 12
              }
            ],
            [
              {
                "name": "Modifications",
                "size": 12
              }
            ],
            [
              {
                "name": "Shipment",
                "size": 12
              }
            ],
            [
              {
                "name": "Banner",
                "size": 12
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.subscriptions": {
        "uid": "sections.subscriptions",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_subscriptions",
          "info": {
            "name": "subscriptions",
            "icon": "asterisk"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Active Subscriptions"
            },
            "Button": {
              "type": "string",
              "default": "Edit"
            },
            "CancelTitle": {
              "type": "string",
              "default": "Cancelled Subscriptions"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          },
          "Button": {
            "edit": {
              "label": "Button",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Button",
              "searchable": true,
              "sortable": true
            }
          },
          "CancelTitle": {
            "edit": {
              "label": "CancelTitle",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "CancelTitle",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title",
            "Button",
            "CancelTitle"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              },
              {
                "name": "Button",
                "size": 6
              }
            ],
            [
              {
                "name": "CancelTitle",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.swap": {
        "uid": "sections.swap",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_swaps",
          "info": {
            "name": "swap",
            "icon": "bezier-curve"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "required": false,
              "default": "Would you like to switch your upcoming product for another? Choose one below to switch the product in your next shipment with a new one!"
            },
            "ShopifyCollection": {
              "type": "component",
              "repeatable": false,
              "component": "components.shopify-collection"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          },
          "ShopifyCollection": {
            "edit": {
              "label": "ShopifyCollection",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "ShopifyCollection",
              "searchable": false,
              "sortable": false
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              }
            ],
            [
              {
                "name": "ShopifyCollection",
                "size": 12
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "components.shopify-collection": {
        "uid": "components.shopify-collection",
        "category": "components",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_components_shopify_collections",
          "info": {
            "name": "shopifyCollection",
            "icon": "align-justify"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "selectCollection": {
              "type": "enumeration",
              "enum": [
                "upcoming",
                "addons",
                "swap",
                "catalog",
                "products"
              ],
              "default": "products"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "id",
          "defaultSortBy": "id",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "selectCollection": {
            "edit": {
              "label": "SelectCollection",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "SelectCollection",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "selectCollection"
          ],
          "edit": [
            [
              {
                "name": "selectCollection",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.addons": {
        "uid": "sections.addons",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_addons",
          "info": {
            "name": "addons",
            "icon": "glasses"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Add to your upcoming box!"
            },
            "Button": {
              "type": "string",
              "default": "Purchase"
            },
            "ShopifyCollection": {
              "type": "component",
              "repeatable": false,
              "component": "components.shopify-collection"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          },
          "Button": {
            "edit": {
              "label": "Button",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Button",
              "searchable": true,
              "sortable": true
            }
          },
          "ShopifyCollection": {
            "edit": {
              "label": "ShopifyCollection",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "ShopifyCollection",
              "searchable": false,
              "sortable": false
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title",
            "Button"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              },
              {
                "name": "Button",
                "size": 6
              }
            ],
            [
              {
                "name": "ShopifyCollection",
                "size": 12
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.upgrades": {
        "uid": "sections.upgrades",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_upgrades",
          "info": {
            "name": "upgrades",
            "icon": "arrow-up"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Update Subscription"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.next-shipment": {
        "uid": "sections.next-shipment",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_next_shipments",
          "info": {
            "name": "nextShipment",
            "icon": "angle-right"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Next Shipment"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "components.banner": {
        "uid": "components.banner",
        "category": "components",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_components_banners",
          "info": {
            "name": "Banner",
            "icon": "audio-description"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Image": {
              "type": "media",
              "multiple": false,
              "required": false,
              "allowedTypes": [
                "images",
                "files",
                "videos"
              ]
            },
            "Text": {
              "type": "text"
            },
            "ButtonText": {
              "type": "string",
              "required": true
            },
            "Link": {
              "type": "string",
              "required": true
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "ButtonText",
          "defaultSortBy": "ButtonText",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Image": {
            "edit": {
              "label": "Image",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Image",
              "searchable": false,
              "sortable": false
            }
          },
          "Text": {
            "edit": {
              "label": "Text",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Text",
              "searchable": true,
              "sortable": true
            }
          },
          "ButtonText": {
            "edit": {
              "label": "ButtonText",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "ButtonText",
              "searchable": true,
              "sortable": true
            }
          },
          "Link": {
            "edit": {
              "label": "Link",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Link",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Image",
            "Text",
            "ButtonText"
          ],
          "edit": [
            [
              {
                "name": "Image",
                "size": 6
              },
              {
                "name": "Text",
                "size": 6
              }
            ],
            [
              {
                "name": "ButtonText",
                "size": 6
              },
              {
                "name": "Link",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.account": {
        "uid": "sections.account",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_accounts",
          "info": {
            "name": "account",
            "icon": "address-card"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Account Details",
              "required": true
            },
            "Billing": {
              "type": "component",
              "repeatable": false,
              "component": "sections.billing",
              "required": true
            },
            "Shipping": {
              "type": "component",
              "repeatable": false,
              "component": "sections.shipment"
            },
            "Payment": {
              "type": "component",
              "repeatable": false,
              "component": "sections.payment",
              "required": true
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          },
          "Billing": {
            "edit": {
              "label": "Billing",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Billing",
              "searchable": false,
              "sortable": false
            }
          },
          "Shipping": {
            "edit": {
              "label": "Shipping",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Shipping",
              "searchable": false,
              "sortable": false
            }
          },
          "Payment": {
            "edit": {
              "label": "Payment",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Payment",
              "searchable": false,
              "sortable": false
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              }
            ],
            [
              {
                "name": "Billing",
                "size": 12
              }
            ],
            [
              {
                "name": "Shipping",
                "size": 12
              }
            ],
            [
              {
                "name": "Payment",
                "size": 12
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.billing": {
        "uid": "sections.billing",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_billings",
          "info": {
            "name": "billing",
            "icon": "atlas"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Billing Information"
            },
            "Button": {
              "type": "string",
              "default": "Edit"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          },
          "Button": {
            "edit": {
              "label": "Button",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Button",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title",
            "Button"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              },
              {
                "name": "Button",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.shipment": {
        "uid": "sections.shipment",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_shipments",
          "info": {
            "name": "shipment",
            "icon": "angle-double-right"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Next Shipment"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.payment": {
        "uid": "sections.payment",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_payments",
          "info": {
            "name": "payment",
            "icon": "calculator"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "default": "Payment Information",
              "required": true
            },
            "Description": {
              "type": "string",
              "required": true
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          },
          "Description": {
            "edit": {
              "label": "Description",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Description",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title",
            "Description"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              },
              {
                "name": "Description",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      },
      "sections.orders": {
        "uid": "sections.orders",
        "category": "sections",
        "schema": {
          "modelType": "component",
          "connection": "default",
          "collectionName": "components_sections_orders",
          "info": {
            "name": "orders",
            "icon": "book-open"
          },
          "options": {
            "timestamps": false
          },
          "attributes": {
            "id": {
              "type": "integer"
            },
            "Title": {
              "type": "string",
              "required": true,
              "default": "Order History"
            }
          }
        },
        "settings": {
          "bulkable": true,
          "filterable": true,
          "searchable": true,
          "pageSize": 10,
          "mainField": "Title",
          "defaultSortBy": "Title",
          "defaultSortOrder": "ASC"
        },
        "metadatas": {
          "id": {
            "edit": {},
            "list": {
              "label": "Id",
              "searchable": false,
              "sortable": false
            }
          },
          "Title": {
            "edit": {
              "label": "Title",
              "description": "",
              "placeholder": "",
              "visible": true,
              "editable": true
            },
            "list": {
              "label": "Title",
              "searchable": true,
              "sortable": true
            }
          }
        },
        "layouts": {
          "list": [
            "id",
            "Title"
          ],
          "edit": [
            [
              {
                "name": "Title",
                "size": 6
              }
            ]
          ],
          "editRelations": []
        },
        "isComponent": true
      }
    }
  }
})