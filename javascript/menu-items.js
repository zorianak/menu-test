// So in this, we will create the object for the list.
// Now, requirements state that this has to be JSON. However,
// JSON is very hard to read, so we will JSON-ify it when we min it

var menuItems = {
    "Game": [{
        "id":"01",
        "link":"http://worldofwarcraft.com"
    }],
    "Community": [{
        "id":"02",
        "link":"http://worldofwarcraft.com/community"
    }],
    "Media": [{
        "id":"03",
        "link":"http://worldofwarcraft.com"
    }],
    "Forums": [{
        "id":"04",
        "link":"http://worldofwarcraft.com/community",
        "sub": [{
            "Gameplay": [{
                "id":"05",
                "link":"/gameplay"
            }],
            "Classes": [{
                "id":"06",
                "link":"/classes",
                "sub": [{
                    "Barbarian": [{
                        "id":"07",
                        "link":"/barbarian"
                    }],
                    "Demon Hunter": [{
                        "id":"08",
                        "link":"/demonhunter"
                    }],
                    "Monk": [{
                        "id":"09",
                        "link":"/monk"
                    }],
                    "Witch Doctor": [{
                        "id":"10",
                        "link":"/witchdoctor"
                    }],
                    "Wizard": [{
                        "id":"11",
                        "link":"/wizard"
                    }]
                }] // closes classes sub
            }], // closes classes
            "Beta": [{
                "id":"12",
                "link":"/beta"
            }],
            "Suport": [{
                "id":"13",
                "link":"/support"
            }]
        }]// closes Forums sub
    }], // Closes Forums
    "Services": [{
        "id":"14",
        "link":"/services"
    }],
}