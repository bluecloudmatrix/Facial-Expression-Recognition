/**
 * Created with JetBrains WebStorm.
 * User: liuqiushan
 * Date: 13-8-22
 * Time: 下午8:32
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
    count: 8,
    orig_window_size: new WindowSize(24, 24),
    stage_classifier: [
        {
            count: 2,
            threshold: -0.2779535949230194,
            parent: -1,
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
            parent: 0,
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
            parent: 1,
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
            parent: 2,
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
            parent: 3,
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
            parent: 4,
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
            parent: 5,
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
            parent: 6,
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