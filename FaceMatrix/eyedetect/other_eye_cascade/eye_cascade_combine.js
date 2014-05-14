/**
 * Created with JetBrains WebStorm.
 * User: liuqiushan
 * Date: 13-7-31
 * Time: 下午1:25
 * To change this template use File | Settings | File Templates.
 */
function WindowSize(width, height) {
    this.width = width;
    this.height = height;
}

function Rect(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

var HaarClassifierCascade = {
    count: 27,
    orig_window_size: new WindowSize(24, 24),
    stage_classifier: [
        {
            count: 3,
            threshold: -1.3421670198440552,
            parent: -1,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0238514300435781, -0.0131405200809240],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.9177057147026062, 0.9167376160621643, -0.7233437895774841],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 13, 4, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 18, 4, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 18, 11)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 13, 6, 11)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0248314104974270, -0.0330026708543301],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3840655982494354, 0.2806155979633331, -0.2050527036190033],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 9, 2, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 9, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 0, 9, 12)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(18, 3, 3, 12)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0872288569808006, -0.1352061927318573],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7050771713256836, -0.9115629196166992, 0.8731781244277954],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 5, 12, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 9, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 22, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 0, 11, 11)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.8296685814857483,
            parent: 0,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0895769074559212, -0.0957485362887383],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7819256782531738, 0.9052957296371460,-0.5055333971977234],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 3, 9, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 6, 9, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 4, 12, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 8, 4, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0270840097218752, -9.6026211977005005e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7278949022293091, 0.8090403079986572, -0.1214065998792648],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 7, 22, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(1, 9, 22, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 10, 14, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 11, 14, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.6302979784086347e-003, 6.8413228727877140e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7073811292648315, -0.7756379246711731, 0.3691458106040955],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 11, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 11, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 10, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 11, 8, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -1.0108629465103149,
            parent: 1,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.1252157986164093, 0.0136456396430731],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6593347787857056, -0.7346783876419067, 0.8662912249565125],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 3, 11, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 6, 11, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 14, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 13, 7, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 18, 7, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0697342529892921, 5.9478362090885639e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7617704868316650, 0.1448128074407578, -0.8327000141143799],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 13, 24, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 13, 8, 9)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 18, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 18, 4, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [7.1047227829694748e-003, -0.0113547202199697],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4963411986827850, 0.8462427258491516, -0.0711318328976631],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 1, 12, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 1, 6, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 6, 11, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 8, 11, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 6,
            threshold: -1.2905670404434204,
            parent: 2,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0780482068657875, -0.0259485095739365],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6113874912261963, -0.3929235935211182, 0.7570214271545410],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 3, 12, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 5, 12, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 9, 16, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 9, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 15, 8, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0162147507071495, -0.0359115712344646],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.0804010331630707, 0.2463442981243134, -0.4520609080791473],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 17, 3, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 17, 3, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 10, 12, 14)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 10, 4, 14)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.5188410179689527e-003, -0.0127044897526503],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6825457811355591, 0.5255255103111267, -0.7826411724090576],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 17, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 17, 2, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 9, 9, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 12, 3, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.1275936961174011, -8.7353598792105913e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5423582792282105, 0.2523742914199829, -0.6453924775123596],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 9, 24, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 15, 24, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 0, 6, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 0, 3, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.7907162010669708e-003, -0.0395105518400669],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5071923136711121, -0.8949654102325440, 0.5414906144142151],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 13, 8, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 13, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 20, 20, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 20, 10, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0351296402513981, -0.0115258395671844],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4418314099311829, 0.4899416863918304, -0.2355553954839706],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 7, 20, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 9, 20, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 8, 14, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 9, 14, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 6,
            threshold: -1.0871659517288208,
            parent: 3,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0925393104553223, -0.0217844098806381],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.4916459023952484, 0.8232465982437134, -0.7151935100555420],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 8, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 8, 8, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 13, 8, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 13, 4, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0109747704118490, 0.0337790809571743],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1889729052782059, -0.6105381250381470, 0.3390550017356873],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 18, 15, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 21, 15, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 8, 24, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 15, 24, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0145373400300741, -0.0400269702076912],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5102748870849609, -0.7323272824287415, 0.6340994238853455],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 18, 15, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 21, 15, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 14, 8, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 14, 4, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0134367700666189, -5.1670852117240429e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4558742046356201, 0.0870786234736443, -0.2765688896179199],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 14, 10, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 14, 5, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 16, 5, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 4, 1, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 7, 1, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0160031896084547, 0.1032982021570206],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4055567979812622, -0.6282721161842346, 0.5935645103454590],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 13, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 16, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 8, 6, 12)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(4, 12, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0148965902626514, 0.0568496212363243],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3389456868171692, -0.3343422114849091, 0.3983533978462219],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 2, 16, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 2, 8, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 1, 16, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 4, 16, 3)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 7,
            threshold: -1.5233869552612305,
            parent: 4,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.1267089992761612, -0.1381646990776062],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5963605046272278, 0.7549579739570618, -0.4507550001144409],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 3, 10, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 6, 10, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 3, 12, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 7, 4, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0387700386345387, 0.0260993093252182],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6001642942428589, -0.2280007004737854, 0.4921410977840424],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 7, 12, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 9, 12, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 0, 12, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 2, 12, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.8910570070147514e-003, -9.2305578291416168e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5230548977851868, 0.4130462110042572, -0.5832309126853943],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 12, 2, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 12, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 12, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 12, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.7144200913608074e-003, -2.0230079535394907e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5489662289619446, 0.2180324047803879, -0.2913680076599121],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 13, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 13, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(23, 0, 1, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(23, 4, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0392640791833401, 4.5898500829935074e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5784493088722229, 0.4738892018795013, -0.7365279793739319],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 1, 22, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 1, 11, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 1, 9, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 1, 3, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.4231187570840120e-004, 0.0451588891446590],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0586612783372402, -0.1413035988807678, 0.5478696823120117],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 13, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 13, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 4, 12, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 6, 12, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.8726199418306351e-003, -3.9202738553285599e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7457957267761231, 0.4050706923007965, -0.4043850004673004],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 13, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 13, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 13, 4, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 14, 4, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 8,
            threshold: -1.4947769641876221,
            parent: 5,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0183856301009655, -0.0169402491301298],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7020242214202881, 0.6581733226776123, -0.5462635755538940],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 12, 6, 3)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(6, 13, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 11, 6, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 11, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0328085683286190, -0.1431100964546204],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5132616162300110, -0.9359474778175354, 0.0589634887874126],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 16, 18, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 20, 18, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 0, 9, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 3, 3, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.4137430116534233e-003, -0.0912904813885689],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5045266151428223, 0.6125031113624573, -0.3810580968856812],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 4, 6, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 5, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 3, 16, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 7, 8, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.0953271090984344e-003, 0.0237218309193850],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8592560291290283, 0.1601240038871765, -0.7333024740219116],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 20, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 20, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 2, 12, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 2, 4, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [7.4515561573207378e-004, -4.6394220553338528e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4958445131778717, -0.8039970993995667, 0.4155359864234924],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 20, 6, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 22, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 19, 2, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 19, 1, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0140766296535730, 1.1873410549014807e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.2064453065395355, -0.2025389969348908, 0.6265673041343689],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 11, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 11, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 12, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 12, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [8.0743357539176941e-003, -4.8344847746193409e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7159941792488098, 0.4935429096221924, -0.3905442953109741],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 0, 12, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 0, 4, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 13, 6, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 13, 3, 11)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0173891894519329, 0.0159695092588663],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6229544878005981, -0.1561708003282547, 0.8977084755897522],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 11, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 11, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 9, 3, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 10, 3, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 7,
            threshold: -1.1059700250625610,
            parent: 6,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.1404760032892227, 6.4099379815161228e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6291666030883789, -0.4138435125350952, 0.6970946192741394],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 4, 12, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 8, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 9, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 12, 4, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.2297182157635689e-003, 0.0120810102671385],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4885854125022888, -0.2251697033643723, 0.6099463105201721],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 13, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 2, 18, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 3, 18, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.4075031764805317e-003, -6.1810999177396297e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3605121970176697, 0.3362061977386475, -0.5729994773864746],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 4, 8, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 5, 8, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 4, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 5, 9, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0128969503566623, -0.0150073999539018],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.6094096899032593, 0.1409365981817246, -0.4806079864501953],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 8, 4, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 15, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 9, 6, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 12, 6, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-5.2646810217993334e-005, 3.5902198869735003e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3903690874576569, 0.5141044259071350, -0.7720599770545960],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 21, 2, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 21, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 15, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 16, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.7473629850428551e-004, -1.2454879470169544e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.1534793972969055, 0.1084558963775635, -0.3307996094226837],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 2, 6, 22)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 2, 3, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 13, 3, 11)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 13, 5, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 14, 5, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.7964200600981712e-003, -8.2849990576505661e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4951313138008118, 0.1748013943433762, -0.7007259726524353],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 11, 4, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 11, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 12, 2, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 12, 1, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 17, 1, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 9,
            threshold: -1.0878289937973022,
            parent: 7,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [7.3435821104794741e-004, 6.8880408070981503e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4004377126693726, 0.7366849184036255, -0.6671525239944458],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 13, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 13, 1, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 0, 12, 9)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 0, 6, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1048754975199699, 1.7435719491913915e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3715702891349793, 0.1377407014369965, -0.2456907033920288],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 5, 24, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 8, 24, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 7, 2, 15)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 12, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.8091219291090965e-003, -0.0471621192991734],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7445436120033264, -0.7521051168441773, 0.4296562075614929],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 1, 9, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 1, 3, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 1, 3, 20)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 11, 3, 10)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0111476900056005, 9.7043607383966446e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.1730145066976547, -0.0841382220387459, 0.6648244857788086],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 11, 4, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 12, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 12, 8, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 12, 4, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.6048569018021226e-004, 0.0151660898700356],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6081349253654480, 0.3856815993785858, -0.6846286058425903],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 14, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 9, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 0, 3, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.1264251447282732e-004, 1.6052259597927332e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.2353634983301163, 0.0482846796512604, -0.8887140154838562],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 14, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 14, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 19, 2, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 19, 1, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0937751084566116, -0.0664341300725937],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.2330757975578308, 0.2390872985124588, -0.7029014229774475],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 6, 9, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 9, 3, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 5, 14, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 7, 14, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.0962548013776541e-004, 0.0122747896239161],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3878923952579498, -0.1476065069437027, 0.5563293099403381],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 13, 2, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 13, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 13, 6, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 13, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.0360810235142708e-003, 6.1787739396095276e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3673459887504578, -0.7237203121185303, 5.8678179048001766e-003],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 10, 6, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 11, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 2, 17, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 2, 17, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 9,
            threshold: -1.2550460100173950,
            parent: 8,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [1.6069009434431791e-003, -0.0535671897232533],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.3712637126445770, 0.7775490283966065, -0.4105794131755829],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 13, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 10, 6, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 10, 6, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.2335820356383920e-003, -6.6575440578162670e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3127048015594482, -0.9703775048255920, 0.0918375626206398],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 13, 24, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 13, 12, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 15, 12, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 19, 3, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 19, 3, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.2603920660912991e-003, -0.4948416054248810],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5237460136413574, 0.4840391874313355, -0.5203914046287537],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 22, 17, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 23, 17, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 4, 24, 15)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(8, 9, 8, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0399363301694393, 0.0118483798578382],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.0123651903122664, 0.0434798896312714, -0.6848425269126892],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 8, 1, 15)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 13, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 1, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 1, 3, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-9.3464152887463570e-003, 4.7765551134943962e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7125499248504639, 0.2903479933738709, -0.8289337158203125],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 8, 15, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 13, 5, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 1, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 1, 3, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.1555390059947968, -0.0143335303291678],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7204775810241699, 0.0459887012839317, -0.6057286262512207],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 3, 3, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(21, 3, 3, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 12, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 13, 6, 11)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0727743133902550, -5.0250319764018059e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7397258877754211, 0.2460231035947800, -0.5049021840095520],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 0, 22, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 3, 22, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 4, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.8540298379957676e-003, -7.0345620624721050e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.0786434262990952, -0.7429360151290894, 0.1431020051240921],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 17, 5, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 17, 5, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 21, 12, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 21, 6, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0108575103804469, -7.9780444502830505e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5472053885459900, 0.4827691018581390, -0.3792040050029755],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 11, 8, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 12, 8, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 4, 9, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 5, 9, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 9,
            threshold: -1.0757100582122803,
            parent: 9,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0371322110295296, 8.2321697846055031e-005],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4198859035968781, -0.4294035136699677, 0.6743711233139038],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 10, 7, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 12, 7, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 14, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 14, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1037421002984047, 0.0180910304188728],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3598339855670929, -0.3882699906826019, 0.2546474933624268],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 6, 24, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 9, 24, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 4, 22, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 4, 11, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 8, 11, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.2443269845098257e-003, 0.0146757401525974],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6657220125198364, 0.4935770928859711, -0.8307067155838013],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 16, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 16, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 18, 6, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 18, 3, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0402791500091553, -0.0294289607554674],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.1799491941928864, 0.1650577038526535, -0.4648365080356598],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 8, 2, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 8, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 1, 22, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 1, 11, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0221148394048214, -4.3960660696029663e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.3028902113437653, -0.6852176189422607, 0.4907405972480774],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 13, 24, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 13, 12, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 16, 12, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 16, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 17, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0126472497358918, 4.9733328633010387e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7738965749740601, -0.1378424018621445, 0.4964857101440430],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 9, 3, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 10, 3, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 12, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 12, 1, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 16, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.1486908234655857e-003, -1.0725680040195584e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7160890102386475, 0.1587954014539719, -0.6062734127044678],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 11, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 11, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 10, 3, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 10, 1, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0327900685369968, 4.8658368177711964e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0682640969753265, -0.0743127167224884, 0.5373209714889526],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 10, 6, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(20, 10, 2, 10)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 13, 3, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 14, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.3643739297986031e-003, -1.4021849492564797e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4218235015869141, 0.2603374123573303, -0.6008734703063965],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 6, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 10, 2, 10)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 14, 1, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 10,
            threshold: -1.3401349782943726,
            parent: 10,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0219285394996405, -0.5199859738349915],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7477747201919556, 0.0609994605183601, -0.6358193755149841],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 12, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 12, 2, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 3, 24, 15)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(8, 8, 8, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.1119269765913486e-003, -3.4341039281571284e-005],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.2452562004327774, 0.1291075944900513, -0.4047445952892304],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 14, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 14, 2, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 11, 7, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 13, 7, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.9757659174501896e-003, 2.2663150448352098e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6450151205062866, -0.5152754187583923, 0.2668781876564026],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 12, 4, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 13, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 9, 3, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 14, 3, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.2776589505374432e-003, -1.6437920276075602e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3819886147975922, -0.8027858138084412, 0.0807905867695808],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 13, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 1, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 1, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.8647088911384344e-003, 1.2707220157608390e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6473376750946045, 0.3957279026508331, -0.5826100707054138],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 0, 6, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 0, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 0, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 0, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0872388035058975, -9.0119186788797379e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6163061857223511, 0.4534986019134522, -0.1225219964981079],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 0, 22, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 3, 22, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 3, 11, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 4, 11, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.1979731544852257e-003, 2.1135499700903893e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6426001191139221, -0.4512510001659393, 0.3201329112052918],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 13, 8, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 13, 4, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 11, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 11, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.2232030276209116e-003, 5.8253789320588112e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.2304999977350235, 0.0373009890317917, -0.8445848822593689],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 22, 13, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 23, 13, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 18, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 19, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.4265490248799324e-003, -0.0479054711759090],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5358861088752747, 0.6130167245864868, -0.2755779922008514],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 6, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 13, 2, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 0, 16, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 2, 16, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.9573041722178459e-003, 5.1229149103164673e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6378055810928345, -0.3395068049430847, 0.1049546003341675],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 16, 3, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 17, 3, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 3, 4, 15)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 3, 2, 15)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 13,
            threshold: -1.0676120519638062,
            parent: 11,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0694126635789871, 0.0115805501118302],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3734402060508728, -0.2690775096416473, 0.8209636807441711],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 13, 16, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 13, 8, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 10, 15, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 12, 15, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.5509621053934097e-003, -0.0130681395530701],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0228755492717028, 0.5615553259849548, -0.0420875698328018],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 12, 2, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 12, 1, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 17, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 10, 4, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(22, 10, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 16, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.8687649862840772e-003, -0.1407347023487091],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4337852001190186, 0.8189294934272766, -0.3971765041351318],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 12, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 12, 1, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 16, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 9, 18, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 11, 18, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0892693325877190, -0.0409097112715244],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3832728862762451, -0.6928172111511231, 0.0812900066375732],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 5, 24, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 8, 24, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 8, 12, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 8, 4, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0301271397620440, 4.0346509777009487e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5552055835723877, 0.0226065795868635, 0.6698424220085144],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 7, 15, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 12, 5, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 10, 15, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 11, 15, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.6406749859452248e-003, -1.2116599828004837e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [3.7038859445601702e-003, -0.4182895123958588, 0.0324261896312237],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 20, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 20, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 20, 1, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 20, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.2184760271338746e-004, -1.3387009967118502e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5650277137756348, -0.6816747784614563, 0.3008311986923218],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 20, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 20, 1, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 19, 3, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 20, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0109005896374583, -0.0103275300934911],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.0389537885785103, 0.0685940533876419, -0.5395839214324951],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 0, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(14, 0, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 10, 20, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 10, 10, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [5.0840647891163826e-003, -0.0264867898076773],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7876784801483154, -0.6910346150398254, 0.2011221945285797],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 0, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 0, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 7, 12, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 7, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0226856991648674, -6.6847922280430794e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1357049047946930, 0.3398461937904358, -0.1814503073692322],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 12, 8, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 12, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 9, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 10, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [5.6718621635809541e-004, -2.9457430355250835e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5263916850090027, -0.7088825106620789, 0.3290624022483826],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 4, 1, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 7, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 6, 1, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 7, 1, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0226784795522690, -8.2635588478296995e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0916620865464211, 0.3214369118213654, -0.2373902946710587],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 12, 8, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 12, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 10, 2, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 10, 1, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 17, 1, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0114667499437928, -1.3823109911754727e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7439143061637878, 0.2833214998245239, -0.4465106129646301],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 12, 8, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 12, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 10, 2, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 10, 1, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 17, 1, 7)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 12,
            threshold: -1.3889679908752441,
            parent: 12,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0654245465993881, -7.3378761298954487e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6097996234893799, 0.7642099261283875, -0.0150727704167366],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 2, 6, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 5, 6, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 8, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 9, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [5.3404979407787323e-003, -8.9242012472823262e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.0768080726265907, 0.2295027971267700, -0.4224570095539093],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 7, 1, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 7, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 0, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 0, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0481874607503414, -8.7968620937317610e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6312583088874817, 0.0349753387272358, -0.5850965976715088],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 7, 12, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 7, 6, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 15, 6, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 15, 3, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [5.2091217366978526e-004, -3.2155299559235573e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5083113908767700, 0.1852505952119827, -0.4225339889526367],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 12, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 13, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 13, 8, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.2924361554905772e-004, -1.2004460440948606e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5173038840293884, -0.6832972168922424, 0.3972710072994232],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 4, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 14, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 18, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 18, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.8892249576747417e-003, 7.8629180788993835e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1500786989927292, 0.0918951332569122, -0.5908061265945435],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 0, 2, 24)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(21, 12, 2, 12)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 1, 6, 8)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 1, 2, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.0850919643417001e-003, -5.9475651942193508e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.3146018087863922, -0.6770902872085571, 0.4319072961807251],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 22, 12, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 23, 12, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 18, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 18, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0368132591247559, -0.0120468595996499],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.4487231075763702, 0.1499537974596024, -0.0975186824798584],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(23, 4, 1, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(23, 4, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 8, 3, 6)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(17, 10, 1, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0213868208229542, -4.2431019246578217e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7932279706001282, 0.4418700933456421, -0.2035100013017654],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 4, 8, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 4, 4, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 8, 3, 6)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(6, 10, 1, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0174076296389103, 0.0246805306524038],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4599778056144714, -0.2075046002864838, 0.5455291867256165],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 0, 8, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 2, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 0, 10, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 2, 10, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0203835908323526, -0.0241220798343420],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5536010861396790, 0.7527589797973633, -0.3525885045528412],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 0, 10, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 2, 10, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 11, 6, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 11, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0689294189214706, -0.0148666203022003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0400638096034527, 0.1873330026865006, -0.2752873003482819],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 13, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 16, 8, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 13, 24, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 13, 12, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 16, 12, 3)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 8,
            threshold: -0.8949174284934998,
            parent: 13,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0144168604165316, -6.6447397693991661e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4623996913433075, 0.1488562971353531, -0.6779835820198059],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 8, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 13, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 11, 2, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 11, 1, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 17, 1, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1414857953786850, -0.0945860967040062],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3983901143074036, 0.1688922047615051, -0.2089895009994507],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 5, 24, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 8, 24, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 18, 3)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(9, 14, 6, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.5030930992215872e-003, -3.0519650317728519e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6518191099166870, -0.7717378735542297, 0.4284242987632752],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 18, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 19, 2, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 18, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 19, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-5.4234690032899380e-003, 0.1978272050619125],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.2416701018810272, -0.3924522101879120, 0.2554205060005188],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 0, 8, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 0, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 6, 24, 18)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 15, 24, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0530390702188015, 6.4097889699041843e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3290731012821198, -0.4479221999645233, 0.4526425004005432],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 2, 15, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(14, 7, 5, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 15, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 16, 6, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.6973410644568503e-004, 2.6152681093662977e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.2784740924835205, 0.0338828898966312, -0.7738440036773682],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(22, 9, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(22, 9, 1, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 0, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 0, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.0095180477946997e-003, -4.7134119085967541e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6469259262084961, -0.6859164834022522, 0.3665708899497986],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 0, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 0, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 9, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 9, 2, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0770727396011353, 6.4111840911209583e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5459883213043213, -0.2545126974582672, 0.1336515992879868],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 24, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 3, 24, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 2, 2, 22)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 13, 2, 11)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 13,
            threshold: -1.1931639909744263,
            parent: 14,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0264606103301048, -8.5845030844211578e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6627395153045654, 0.6041057109832764, -0.3300972878932953],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 12, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 12, 2, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 13, 2, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-5.3482297807931900e-003, -2.9834860470145941e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.0942102670669556, 0.4183275103569031, -0.0909335911273956],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 6, 1, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 9, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 16, 6, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 17, 6, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0301669705659151, -7.9063512384891510e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2626528143882752, -0.4602133035659790, 0.7437608838081360],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 6, 9, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 9, 3, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 16, 12, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 16, 4, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0189114492386580, 3.1137090991251171e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0774962007999420, 0.1378027945756912, -0.5447518825531006],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 17, 12, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 20, 12, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 14, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 14, 1, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 18, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [7.9761333763599396e-003, -0.0942572206258774],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5539429187774658, -0.8780158162117004, 0.3134759068489075],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 17, 12, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 20, 12, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 12, 7, 12)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(1, 16, 7, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0330414101481438, -0.0410313494503498],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.1306616067886353, -0.7615854740142822, 0.0287394504994154],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 6, 4, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(19, 9, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 6, 6, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(20, 8, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.1876507718116045e-004, -1.1683360207825899e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4479402005672455, 0.2270520925521851, -0.6680622100830078],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 10, 2, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 10, 1, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 17, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 11, 4, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 11, 2, 11)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0136084696277976, -0.0338828787207603],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3757318854331970, -0.4463860094547272, -5.0520729273557663e-003],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 6, 4, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(19, 9, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 6, 6, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(20, 8, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.5581190604716539e-003, -3.1376150436699390e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6434137821197510, 0.1169157996773720, -0.5444968938827515],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 12, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 12, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 8, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 10, 6, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0721863433718681, -0.0305806901305914],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5429241061210632, 0.1555200964212418, -0.4809882044792175],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 10, 15, 12)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 10, 5, 12)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 2, 24, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 2, 12, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.7201140290126204e-003, 6.3659138977527618e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7787011265754700, 0.3359895944595337, -0.5979570150375366],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 15, 3, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 15, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 0, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 0, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-4.5061330311000347e-003, 8.2495389506220818e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3603692948818207, -0.1251149028539658, 0.5639021992683411],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 12, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 13, 6, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 9, 12, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 10, 12, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0136198503896594, -3.3826220314949751e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4714635908603668, 0.3577029109001160, -0.3918519020080566],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 7, 16, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 8, 16, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 17, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 18, 6, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 15,
            threshold: -1.2124650478363037,
            parent: 15,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [1.7574729863554239e-003, -2.7882780414074659e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.5757576823234558, -0.4977462887763977, 0.4718644022941589],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 6, 1, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 13, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 8, 4, 9)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 8, 2, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.6247619641944766e-003, -0.0379232093691826],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.1951270997524262, 0.3037081062793732, -0.2282529026269913],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 0, 6, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 0, 3, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 6, 6, 9)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(19, 9, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0109116695821285, -3.6755918990820646e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.3024032115936279, -0.8810907006263733, 0.6450582146644592],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 12, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 12, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 18, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 18, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.4169830139726400e-003, -3.4034899435937405e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3125385940074921, 0.2424688935279846, -0.0976489186286926],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 5, 4, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 6, 4, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 6, 10, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 6, 5, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 7, 5, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.6025299448519945e-003, 0.0195639394223690],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.7296444177627564, 0.2098506987094879, -0.5751966834068298],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 3, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 3, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 10, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 0, 5, 14)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-5.0419680774211884e-003, 4.9819611012935638e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.0789484828710556, -0.0711880475282669, 0.4707829058170319],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 5, 4, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 6, 4, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 6, 10, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 6, 5, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 7, 5, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.6965320101007819e-003, 5.0088497810065746e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4665612876415253, -0.3906525969505310, 0.4533118009567261],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 5, 4, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 6, 4, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 4, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 4, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 6, 4, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0378218293190002, -0.0118586495518684],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.2125681936740875, -0.1105241999030113, 0.0841587632894516],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 6, 8, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 9, 8, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 10, 19, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 12, 19, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1025630980730057, 1.4179230493027717e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.9873449206352234, -0.2882412970066071, 0.3128153085708618],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 6, 8, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 9, 8, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 22, 1, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 23, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [9.6056358888745308e-003, -2.2344361059367657e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.2866285145282745, -0.9484775066375732, 8.0532152205705643e-003],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 2, 22, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 3, 22, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 0, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 0, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.0850199507549405e-004, -1.8576530274003744e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.4472169876098633, -0.7148100137710571, 0.4068478941917419],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 15, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 15, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 0, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 0, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.4478030391037464e-003, -0.1235781013965607],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2917849123477936, -0.8231312036514282, 0.0116000697016716],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 13, 6, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 14, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 11, 15, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 14, 15, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [9.3192991334944963e-004, 0.0139222098514438],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5630295276641846, -0.4917036890983582],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 14, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 22, 14, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 22, 7, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0280041396617889, -9.6887173131108284e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.1100919991731644, -0.2660528123378754, 0.0378996692597866],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 6, 3, 9)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(21, 9, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 7, 6, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(20, 9, 2, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0250032097101212, 0.0253149494528770],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.6134002208709717, -0.2768676877021790, 0.4142577946186066],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 18, 16, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 18, 8, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 1, 20, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 1, 10, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 11,
            threshold: -1.1280909776687622,
            parent: 16,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0246785003691912, -0.0466300509870052],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.4537568986415863, 0.6407039165496826, -0.2291397005319595],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 14, 18, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 14, 6, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 6, 16, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 8, 16, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.8085651621222496e-003, -0.1993515044450760],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5297921895980835, -0.9472004175186157, 0.0393917784094810],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 10, 2, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 10, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 12, 9, 12)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(13, 16, 3, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0326304100453854, -9.3309488147497177e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4788019061088562, 0.3548178076744080, -0.3286795914173126],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 24, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 10, 12, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 17, 12, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 6, 8, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 8, 8, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.0831408910453320e-003, 8.4887858247384429e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1901779025793076, 0.0369771793484688, -0.6031895279884338],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 14, 3, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 15, 3, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 18, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 18, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-8.4742549806833267e-003, -1.0742610320448875e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.9196528196334839, -0.7647972702980042, 0.2852371037006378],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 14, 3, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 15, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 18, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 18, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0136907203122973, -6.1779939569532871e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6595935225486755, 0.1461187005043030, -0.1658512949943543],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 11, 3, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(21, 12, 1, 10)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 10, 3, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(18, 11, 1, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.6446419544517994e-003, -5.2893278189003468e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.2864049971103668, 0.2475544065237045, -0.5233107805252075],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 11, 10, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 12, 10, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 10, 7, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 11, 7, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0171131491661072, -8.2716243341565132e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2693409919738770, 0.2551752924919128, -0.6030511260032654],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 10, 12, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 10, 4, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(23, 0, 1, 24)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(23, 6, 1, 12)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.9121059924364090e-004, -0.0554300993680954],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.2724095880985260, -0.7276315093040466, 0.4315985143184662],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 20, 1, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 22, 1, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 12, 9, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 15, 9, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.1578557938337326, 1.5515099512413144e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6994186043739319, -0.0848723128437996, 0.4082838892936707],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 4, 4, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 4, 4, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 11, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 11, 1, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0415567494928837, 0.0182005092501640],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7673791050910950, -0.7771263122558594, 0.2361602932214737],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 3, 8, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 3, 4, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 9, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 18, 9, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 13,
            threshold: -1.2677969932556152,
            parent: 17,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [2.6365460362285376e-003, 9.8196575418114662e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4720920920372009, -0.5139665007591248, 0.5821821093559265],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 10, 2, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 10, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 14, 9, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 14, 3, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.0141811110079288e-003, 0.0135723501443863],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.1620714068412781, 0.0608835183084011, -0.5681391954421997],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 2, 4, 22)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 2, 2, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 13, 2, 11)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 8, 1, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 8, 1, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0411405600607395, -0.0187847595661879],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4823639094829559, 4.5133749954402447e-003, -0.6595963835716248],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 6, 12, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 6, 6, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 4, 4, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 7, 4, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0363294407725334, 3.9991759695112705e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2401369065046310, 0.0154806999489665, -0.6128336787223816],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 6, 6, 12)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 8, 2, 12)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 19, 3, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 19, 3, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.3402379408944398e-004, 0.0228470191359520],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.4722602963447571, 0.3729496002197266, -0.8016148209571838],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 15, 2, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 15, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 6, 1, 16)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 14, 1, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.3557820348069072e-003, 2.2727309260517359e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5397036075592041, 0.0547862388193607, -0.6955559849739075],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 4, 3, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(19, 4, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 5, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 5, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-4.7992859035730362e-003, -0.0212712101638317],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3163338005542755, -0.8414462208747864, 0.4124312996864319],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 11, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 12, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 12, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 13, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-8.5205417126417160e-003, -3.7028701044619083e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4196099042892456, 0.1743388026952744, -0.1110697984695435],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 10, 10, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 11, 10, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 10, 16, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 10, 8, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 11, 8, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0675858631730080, 0.0713827610015869],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7874060869216919, 0.1345188021659851, -0.6026911735534668],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 4, 8, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 4, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 7, 14, 16)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 7, 7, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 15, 7, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0114926202222705, -7.4197268113493919e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1640076935291290, 0.2999730110168457, -0.0956764593720436],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 9, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 10, 6, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 6, 1, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 8, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.1998489499092102e-003, -0.1248560994863510],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.6103140115737915, -0.8005664944648743, 0.3551136851310730],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 3, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 3, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 7, 21, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 7, 7, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0114926202222705, -0.0150528298690915],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1691121011972427, 0.8905932903289795, -0.2005721926689148],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 9, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 10, 6 ,1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 9, 4, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(19, 10, 4, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0340343490242958, -3.7842839956283569e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.6626774072647095, -0.6104832291603088, 0.3177114129066467],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 9, 12, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 9, 6, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 14, 6, 5)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 14, 2, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 14, 1, 3)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
		{
            count: 2,
            threshold: -0.2779535949230194,
            parent: 18,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.2181836962699890, -0.0149570200592279],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9168701767921448, 0.9706745147705078, -1.0000230073928833],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 8, 18, 9)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(9, 11, 6, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 2, 24, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 2, 12, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1004389002919197, -5.0040348432958126e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-1.0000360012054443, 0.6389166116714478, -0.9755077958106995],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 8, 15, 9)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(10, 11, 5, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 2, 20, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 3, 20, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.7284411191940308,
            parent: 19,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0666063874959946, -6.1649219132959843e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8095397949218750, 0.9323943853378296, -0.5311052203178406],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 0, 10, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 3, 10, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 0, 2, 18)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 9, 2, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0204966794699430, 0.0908912271261215],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.9395123720169067, -0.3228037953376770, 0.7270209789276123],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 13, 4, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 6, 24, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 8, 24, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0115629397332668, 3.3668919932097197e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8142415881156921, -0.8584136962890625, 1.0000050067901611],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 6, 4, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 6, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 12, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 3, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 13, 1, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 5,
            threshold: -1.0553539991378784,
            parent: 20,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0922842100262642, -4.6932748518884182e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7472354173660278, 0.7524070739746094, -0.8311054706573486],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 6, 9, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 9, 3, 9)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 12, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 12, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [9.5614120364189148e-003, -0.0168710295110941],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6529155969619751, 0.6815248727798462, -0.3351539075374603],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 7, 12, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 8, 12, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 13, 9, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(18, 13, 3, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0139109697192907, 4.5025311410427094e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5420082807540894, -0.8461753129959106, 0.7997465729713440],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 3, 15, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 4, 15, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 12, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 13, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0607514493167400, 0.0117621403187513],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.7256966233253479, -0.7874810099601746, 0.0727520063519478],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 16, 15, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 20, 15, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 15, 7, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 19, 7, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0126984501257539, -0.0489855892956257],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5038552880287170, 0.9261835217475891, -0.9785115122795105],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 11, 6, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 11, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 8, 22, 12)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(1, 12, 22, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.5221372246742249,
            parent: 21,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [8.9374501258134842e-003, -0.0157846398651600],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6217449903488159, 1.0, -0.9165768027305603],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 6, 4, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 8, 4, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 5, 4, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 7, 4, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.2087779045104981, 5.9095718897879124e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8760477900505066, -0.2944625020027161, 0.8977651000022888],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 9, 18, 6)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(9, 11, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 5, 3, 16)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 5, 1, 16)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0236761309206486, -5.1128808408975601e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6889020800590515, 0.7366210818290710, -0.8452634811401367],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 13, 9, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 13, 3, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 11, 4, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 11, 2, 8)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -1.1067299842834473,
            parent: 22,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [7.3052691295742989e-003, -5.7521271519362926e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7354766726493835, 0.5485327243804932, -0.8459448218345642],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 9, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 9, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 8, 5, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 9, 5, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0883091092109680, 0.0291523803025484],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5046042203903198, -0.2236495018005371, 0.8906239271163940],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 16, 13, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 20, 13, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 13, 9, 3)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(14, 14, 3, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.0590390823781490e-003, -0.0203997194766998],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6964182257652283, 0.6538103222846985, -0.7653892040252686],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 13, 4, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 13, 2, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 18, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 9, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 10, 8, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -1.0252239704132080,
            parent: 23,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0709265321493149, -1.8907260382547975e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7590929865837097, 0.8206278085708618, -0.8054512143135071],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 10, 12, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 10, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 14, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 14, 2, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0679462328553200, -0.0146728502586484],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7324637770652771, 0.2401593029499054, -0.4146373867988586],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 2, 24, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 2, 12, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 8, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 13, 4, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0698601305484772, -4.2148531065322459e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4599320888519287, -0.5303431153297424, 0.8981295228004456],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 16, 12, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 20, 12, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 0, 3, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 1, 1, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.8307464122772217,
            parent: 24,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.2347165048122406, -0.1385274976491928],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6828433275222778, 0.9094908833503723, -0.3810516893863678],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 2, 24, 6)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(8, 4, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 5, 6, 18)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(11, 11, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.6758000496774912e-003, 2.1898420527577400e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8735141158103943, 0.2115886062383652, -0.7279549837112427],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 1, 6, 16)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 1, 3, 16)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 23, 8, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 23, 4, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [7.2457198984920979e-004, 6.2956730835139751e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8213655948638916, 0.7256109714508057, -0.7581797242164612],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 10, 1, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 10, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 21, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 21, 3, 3)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.8540652990341187,
            parent: 25,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0241014491766691, -0.0741583928465843],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8531134724617004, 0.8718975186347961, -0.3871505856513977],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 14, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 10, 7, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 16, 7, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 10, 18, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 10, 6, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0557356588542461, -0.0129642002284527],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5732089877128601, -0.6646826267242432, 0.2523804903030396],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 1, 13, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 3, 13, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 20, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 13, 10, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 15, 10, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.9398428313434124e-003, -0.0137042198330164],
                    left: [0, -1],
                    right: [1. -2],
                    alpha: [-0.9225373864173889, 0.9438626766204834, -0.2533322870731354],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 19, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 19, 4, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 14, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 14, 3, 3)
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

