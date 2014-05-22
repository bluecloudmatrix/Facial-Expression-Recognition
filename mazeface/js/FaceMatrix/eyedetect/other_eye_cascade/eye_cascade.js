/**
 * Created with JetBrains WebStorm.
 * User: liuqiushan
 * Date: 13-8-24
 * Time: 下午3:10
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
    count: 18,
    orig_window_size: new WindowSize(24, 24),
    stage_classifier: [
        {
            count: 2,
            threshold: -1.2612169981002808,
            parent: -1,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.1409880965948105, -0.0638735592365265],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.9515597820281982, 0.9846686720848084, -0.3144851922988892],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 12, 19, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 18, 19, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 1, 24, 13)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 1, 8, 13)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0765209868550301, -0.1413767933845520],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.9467319250106812, 0.8011687994003296, -0.8841962814331055],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 10, 9, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 17, 9, 7)
                                }
                            ]
                        },
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
                        }
                    ]
                }
            ]
        },
        {
            count: 2,
            threshold: -0.2674247920513153,
            parent: 0,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0525484196841717, 0.0426568798720837],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8071712851524353, -0.9213957786560059, 0.7959852218627930],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 0, 17, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 3, 17, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 2, 4, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 5, 4, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1259775012731552, -6.1847199685871601e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7548519968986511, 0.6539710164070129, -0.6011078953742981],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 9, 12, 9)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(10, 12, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 12, 6, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 12, 2, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 4,
            threshold: -1.2775520086288452,
            parent: 1,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.1284188032150269, -0.0247479695826769],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8831666111946106, 0.8481600284576416, -0.2980827093124390],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 24, 14)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 0, 8, 14)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 1, 18, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 3, 18, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0102656902745366, 0.1855517029762268],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6642861962318420, -0.6508163809776306, 0.2855665981769562],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 8, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 12, 4, 12)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 12, 20, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 18, 20, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0388758406043053, -3.9587100036442280e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7890264987945557, 0.6476818919181824, -0.5275686979293823],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 6, 16, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 8, 16, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 10, 4, 9)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 10, 2, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.6677941940724850e-003, -0.0132201695814729],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5191252231597900, 0.5706176161766052, -0.2073760926723480],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 6, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 13, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 9, 4, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 9, 2, 11)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 5,
            threshold: -0.7706629037857056,
            parent: 2,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0246849004179239, 0.0280751790851355],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9360210895538330, -0.6612381935119629, 0.8242719769477844],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 10, 18, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 10, 6, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 16, 23, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 20, 23, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0760661214590073, 0.0224923305213451],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8045095801353455, -0.2370104938745499, 0.7702872753143311],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 0, 16, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 3, 16, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 3, 10, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 5, 10, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [8.3717787638306618e-003, 4.8743989318609238e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5178477168083191, -0.7680264711380005, 0.5708867907524109],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 9, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 9, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 10, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 10, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1723928004503250, 8.3289522444829345e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9447398781776428, -0.8216822743415833, -4.9080317839980125e-003],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 3, 24, 11)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 3, 8, 11)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 2, 14, 22)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 2, 7, 11)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 13, 7, 11)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.2021128833293915e-003, 2.0379049237817526e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9999588727951050, 0.7062032818794251, -0.7733309864997864],
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
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 19, 3, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 20, 1, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 4,
            threshold: -1.1098849773406982,
            parent: 3,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0667431205511093, -0.0985073968768120],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7872400283813477, 0.8202580213546753, -0.6726266741752625],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 1, 14, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 3, 14, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 2, 12, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 5, 12, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1405331939458847, 4.9100341275334358e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6799579262733460, -0.5714566111564636, 0.1234558001160622],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 8, 12, 9)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(10, 11, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 12, 7, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 18, 7, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0164119303226471, -2.2546439431607723e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7194771766662598, 0.5116119980812073, -0.5557448863983154],
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
                                    r: new Rect(6, 11, 3, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 11, 1, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-5.5788829922676086e-003, 4.3398761190474033e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3512411117553711, -0.2689124047756195, 0.4138022959232330],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 10, 4, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 10, 2, 8)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 1, 5, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 1, 5, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 5,
            threshold: -1.1967719793319702,
            parent: 4,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0400230400264263, -0.0882991030812263],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6955220103263855, 0.6100869178771973, -0.7119287252426148],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 0, 4, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 3, 4, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 2, 12, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 5, 12, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0462341792881489, -0.0116942403838038],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5759646296501160, 0.2830598056316376, -0.5779398083686829],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 8, 15, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 10, 15, 4)
                                }
                            ]
                        },
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
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.2127432972192764, -0.0380168184638023],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4584206938743591, 0.7554439902305603, -0.3346253931522369],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 12, 24, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 18, 24, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 24, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 0, 12, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0121013298630714, -3.3379420638084412e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6565365791320801, 0.5807912945747376, -0.1239259019494057],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 13, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(17, 13, 4, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 12, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 12, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.4981379974633455e-003, -8.0648642033338547e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5328978896141052, 0.5496724247932434, -0.6104816794395447],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 10, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 10, 1, 8)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 10, 8, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 10, 4, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 4,
            threshold: -1.3725759983062744,
            parent: 5,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0300875902175903, 0.0862239003181458],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5697792768478394, -0.4446310997009277, 0.6813653111457825],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 8, 8, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 10, 8, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 14, 16, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 19, 16, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0886811316013336, -0.0472033508121967],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5732752084732056, 0.7261149883270264, -0.1297795027494431],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 1, 13, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 4, 13, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 3, 8, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 5, 8, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0157220307737589, -0.0554367788136005],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5533506870269775, 0.3280625939369202, -0.7390139102935791],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 4, 4, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 6, 4, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 4, 24, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 6, 24, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.6669519767165184e-003, -0.1006887033581734],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6370576024055481, 0.1944005042314529, -0.3793213069438934],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 13, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 0, 19, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 3, 19, 3)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 7,
            threshold: -0.9861463904380798,
            parent: 6,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0176029093563557, -0.0130888698622584],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5698714852333069, 0.7721868753433228, -0.2413911074399948],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 12, 4, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 8, 9, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 11, 3, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0326654501259327, -0.0808346271514893],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5207446217536926, 0.4317845106124878, -0.1214916035532951],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 5, 7, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 7, 7, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 2, 9, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 5, 9, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0102080600336194, -2.5269489269703627e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3902252912521362, 0.2240146994590759, -0.6668633818626404],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 12, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 12, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 12, 3, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 12, 1, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0286715403199196, -0.0869145467877388],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5752633213996887, 0.2364961951971054, -0.2560246884822846],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 24, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 10, 12, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 1, 9, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 4, 9, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.2972581945359707e-003, -0.0610512904822826],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5697163939476013, 0.6712064743041992, -0.2572160065174103],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 9, 8, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 10, 8, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 0, 10, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 3, 10, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.6822660109028220e-003, 6.7305332049727440e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.1471291929483414, 0.1396778970956802, -0.8436843752861023],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 0, 3, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 0, 1, 10)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 2, 6, 8)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 2, 2, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.8034350834786892e-003, 8.6865350604057312e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.9442989230155945, 0.2296907007694244, -0.8908494114875794],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 0, 3, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 0, 1, 10)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 2, 6, 8)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 2, 2, 8)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 5,
            threshold: -0.9750398993492127,
            parent: 7,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0127233602106571, -4.9411840736865997e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4656901061534882, 0.6948043704032898, -0.8315709829330444],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 8, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 13, 4, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 12, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 12, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0117244003340602, -0.0217682793736458],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2632150948047638, -0.8709148168563843, -0.0447912290692329],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 11, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 11, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 1, 2, 18)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 1, 1, 9)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 10, 1, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-4.7441557981073856e-003, 0.0161057598888874],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4504787921905518, -0.6222208142280579, 0.5508601069450378],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 11, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 11, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 1, 2, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 1, 1, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0174875091761351, -0.0683363825082779],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3812549114227295, 0.5584319829940796, -0.0474327914416790],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 5, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 7, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 4, 15, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 6, 15, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.8918050229549408e-003, -4.8559340648353100e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3770267963409424, 0.5709760189056397, -0.6037799119949341],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 12, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 12, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 12, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 12, 2, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 7,
            threshold: -1.1704169511795044,
            parent: 8,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0110515104606748, 0.0193971302360296],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4813675880432129, -0.5370451807975769, 0.7956780195236206],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 13, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 13, 3, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 14, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 14, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0467959381639957, 0.0215083099901676],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4652358889579773, -0.1002048030495644, 0.6060354113578796],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 9, 14, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 11, 14, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 10, 10, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 12, 10, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0599529817700386, -0.0110651301220059],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6529281139373779, 0.5607690215110779, -0.2906551063060761],
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
                                    r: new Rect(5, 9, 13, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 10, 13, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.4467050097882748e-003, -0.0200310703366995],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8227472901344299, 0.0952524393796921, -0.5261852145195007],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 16, 6, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 20, 6, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 10, 12, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 10, 6, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0179812405258417, 0.0496014393866062],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4584543108940125, 0.5401803851127625, -0.6380540132522583],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 16, 7, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 20, 7, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 2, 15, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 2, 15, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.2717351093888283e-003, 8.6252781329676509e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8093968033790588, 0.0876861363649368, -0.8679791092872620],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 21, 3, 3)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(22, 22, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 8, 3, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 8, 1, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.2480960469692945e-003, -2.4083559401333332e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5561410784721375, -0.8428961038589478, 0.3952771127223969],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 8, 6, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 8, 3, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 0, 3, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 0, 1, 10)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 8,
            threshold: -1.0571800470352173,
            parent: 9,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-1.3686219463124871e-003, 1.6422639600932598e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4749226868152618, -0.5720348954200745, 0.4427792131900787],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 12, 2, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 12, 1, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 18, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 13, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1066994965076447, -0.1237502023577690],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3634136021137238, 0.4433776140213013, -0.1099952980875969],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 0, 8, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 3, 8, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 2, 17, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 5, 17, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0609101392328739, -4.3600718490779400e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6651325821876526, 0.5215423107147217, -0.3552750051021576],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 6, 9, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(14, 9, 3, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 0, 1, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 3, 1, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0315495282411575, -4.8165838234126568e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.1803995072841644, 0.5940678119659424, -0.1428889930248261],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 3, 6, 15)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(19, 5, 2, 15)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 13, 3, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 14, 1, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0319607183337212, -2.7144080959260464e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5388159751892090, -0.8383371233940125, 0.3335284888744354],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 3, 15, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 5, 15, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 6, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 6, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0562466084957123, -4.6798729454167187e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6069753766059876, -0.8499137759208679, 0.0388686992228031],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 1, 24, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 1, 12, 8)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 21, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 21, 1, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 22, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.0565311317332089e-004, 1.9659718964248896e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7578331232070923, 0.3701586127281189, -0.6224719882011414],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 21, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 21, 1, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 22, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 18, 3, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 19, 1, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.1401519877836108e-003, 0.0123372003436089],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3557743132114410, -0.1742964982986450, 0.6164602041244507],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 12, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 12, 1, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 15, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 13, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 14, 1, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 8,
            threshold: -1.3820719718933105,
            parent: 10,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [3.4214979968965054e-003, 0.0166135001927614],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.4425480961799622, -0.6517658829689026, 0.4839414060115814],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 12, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 14, 12, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 11, 12, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 13, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.6034910697489977e-003, -0.0110708102583885],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3746486008167267, 0.3769640028476715, -0.3341285884380341],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 12, 3, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 12, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 11, 6, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 11, 2, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1218516975641251, -0.0834698975086212],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4764611124992371, 0.3963285982608795, -0.4532141983509064],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 1, 14, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 3, 14, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 2, 7, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 5, 7, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0108760101720691, 0.0118736196309328],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4076828956604004, 5.4089440964162350e-003, 0.7501155138015747],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 13, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 11, 4, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 11, 2, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0249595493078232, -2.9381520580500364e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3901700973510742, 0.0900584533810616, -0.6104004979133606],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 3, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 5, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 12, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 12, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-4.7772401012480259e-003, -3.9166691713035107e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.2584671080112457, 0.2565672993659973, -0.1432525068521500],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 11, 3, 11)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 11, 1, 11)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 11, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 11, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.9375890735536814e-003, -8.2245711237192154e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.4087663888931274, 0.6272618174552918, -0.5006315708160400],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 12, 3, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 12, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 6, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 10, 3, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.1672035008668900, 4.6192752197384834e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8052161931991577, 0.1031346991658211, -0.8763636946678162],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 12, 22, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 18, 22, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 0, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(22, 1, 1, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 7,
            threshold: -1.0116139650344849,
            parent: 11,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.1473100036382675, -0.0411675088107586],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3441999852657318, 0.6769176125526428, -0.4574159085750580],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 0, 19, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(1, 3, 19, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 9, 12, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 9, 4, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0236281603574753, -0.0399187691509724],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4908765852451325, 0.6849681735038757, -0.0367041900753975],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 4, 8, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 6, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 5, 12, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 7, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0109069198369980, -2.2256530355662107e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.4772438108921051, 0.1474709957838059, -0.5436936020851135],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 9, 3, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 10, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 8, 4, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 8, 2, 10)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.6553948777727783e-004, 7.2973249480128288e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4556075036525726, 0.1265362054109573, -0.5777012705802918],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 22, 19, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 23, 19, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 4, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(21, 5, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.7277150182053447e-003, -0.0557367093861103],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7649021148681641, -0.8448650836944580, 0.4048388004302979],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 0, 3, 8)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 0, 1, 8)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 11, 18, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 11, 9, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 15, 9, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.7052289117127657e-003, -4.8198169097304344e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.7703627943992615, 0.3037588000297546, -0.2383332997560501],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 7, 3, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(19, 8, 1, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 11, 4, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 11, 2, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.0031399801373482e-003, -3.5666651092469692e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8689656853675842, -0.8502749800682068, 0.2841938138008118],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 7, 2, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 8, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 5, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 5, 2, 6)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 9,
            threshold: -1.1450270414352417,
            parent: 12,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0336339399218559, -0.0111034996807575],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3631645143032074, -0.8379039764404297, 0.5328676104545593],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 3, 8, 15)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 3, 4, 15)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 6, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 6, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.8972279764711857e-003, -0.0723911672830582],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.1725492030382156, 0.3837532103061676, -0.1180569976568222],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 0, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 0, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 2, 8, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 5, 8, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0305909998714924, -5.5099921301007271e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5412982106208801, 0.5087488889694214, -0.3239837884902954],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 7, 9, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 9, 9, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 7, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 13, 7, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.1339459344744682e-003, -5.5444128811359406e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5924047827720642, 0.3399403095245361, -0.1193002983927727],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 11, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 11, 1, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 14, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 12, 4, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 12, 2, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.4405440781265497e-003, -0.0169282797724009],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7162991762161255, 0.3767046034336090, -0.4381940066814423],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 11, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 11, 1, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 14, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 9, 9, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 10, 9, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0325750298798084, -0.2599163055419922],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.2428953945636749, 0.4452346861362457, -0.0645109415054321],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 0, 19, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 2, 19, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 0, 18, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 5, 18, 5)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [9.0116709470748901e-003, -0.0135224601253867],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.3805552124977112, 0.4462066888809204, -0.5544943809509277],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 12, 3, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 13, 3, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 11, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 11, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.5898220008239150e-003, 3.9501721039414406e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5487046837806702, 0.0601637698709965, -0.7950661182403565],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 10, 6, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 10, 3, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 10, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(21, 10, 1, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.6832830626517534e-003, -1.7058249795809388e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8189042806625366, -0.7378358244895935, 0.3958163857460022],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 10, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 10, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 20, 7, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 21, 7, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 7,
            threshold: -1.0412850379943848,
            parent: 13,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [7.0352000184357166e-003, -0.0152017101645470],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4001806974411011, 0.6357824802398682, -0.4389539957046509],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 6, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(1, 8, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 10, 8, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 10, 4, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0399207696318626, 2.0984120201319456e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7156984806060791, 0.1303628981113434, -0.6325488090515137],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 24, 8)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 0, 8, 8)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 0, 4, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 0, 2, 10)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.5654730377718806e-003, -0.0835705101490021],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.6951730847358704, 0.6743956804275513, -0.0419422015547752],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 22, 19, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 23, 19, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 1, 15, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 4, 15, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0355629399418831, -2.5356239639222622e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5832430124282837, 0.2089668959379196, -0.1640288978815079],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 0, 7, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 2, 7, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(20, 3, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(20, 5, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0118953902274370, -1.4753929572179914e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.5153501033782959, 0.1043647974729538, -0.6174960136413574],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 10, 3, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 11, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 12, 3, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 13, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.5786939077079296e-003, -1.6882020281627774e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7418248057365418, -0.7653198838233948, -0.0242359805852175],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 0, 9, 14)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 0, 3, 14)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 6, 3, 18)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 15, 3, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0108347097411752, -4.1521801613271236e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3591381907463074, 0.6076170206069946, -0.6279209852218628],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 10, 6, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 10, 2, 9)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 12, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 12, 2, 6)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 10,
            threshold: -1.0082919597625732,
            parent: 14,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0120215900242329, -6.1334078200161457e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3386156857013702, -0.5402755141258240, 0.5760067105293274],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 12, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 12, 4, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 9, 9, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 9, 3, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.0531570296734571e-003, -0.2188511937856674],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.1333201974630356, -0.9137706756591797, 0.1500972956418991],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(23, 19, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(22, 20, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 2, 10, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 9, 10, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0489600487053394, -0.0632323473691940],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.2411510050296783, 0.3348419070243835, -0.6498590707778931],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 5, 14, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 7, 14, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 4, 14, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 6, 14, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-8.3726029843091965e-003, 5.6651690974831581e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5089669227600098, -0.5132511854171753, 0.0789417698979378],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 6, 11)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 13, 2, 11)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 12, 19, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 14, 19, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.3765139738097787e-003, 1.1216220445930958e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5861709713935852, 0.4122788012027741, -0.7964949011802673],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 20, 3, 3)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(1, 21, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 8, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 8, 2, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.6817458719015121e-004, 1.4359720516949892e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.4184939861297607, -0.4859702885150909, 0.1076679974794388],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 22, 18, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 23, 18, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 0, 2, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 0, 1, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [4.7844098880887032e-003, 0.0165723301470280],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.7537838220596314, -0.6448345184326172, 0.3802346885204315],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 10, 10, 14)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 10, 5, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 17, 5, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 11, 5, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 17, 5, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1389894932508469, 5.9473710134625435e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8394438028335571, -0.0874039530754089, 0.0821795836091042],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 9, 24, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 11, 24, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 0, 4, 13)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(14, 1, 2, 13)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-3.9460840635001659e-003, 1.1101700365543365e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2481254935264587, 0.4859341084957123, -0.9810857772827148],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 0, 13, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 1, 13, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 19, 2, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 19, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.8947100508958101e-003, -2.1598059684038162e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3211939930915833, 0.4294686019420624, -0.2290661036968231],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 11, 3, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(14, 11, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(15, 12, 4, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 12, 2, 6)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 12,
            threshold: -1.1323490142822266,
            parent: 15,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0116211697459221, -0.0120713701471686],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.5260767936706543, 0.4492462873458862, -0.3922331929206848],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 11, 6, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 13, 2, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 3, 12, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 4, 12, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.3521168194711208e-003, -1.9262050045654178e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.2139292061328888, 0.2394088953733444, -0.2982011139392853],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 12, 4, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(21, 12, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 18, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(18, 10, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 11, 2, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [3.5336499568074942e-003, 3.5307000507600605e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6986032724380493, 0.3886289894580841, -0.5417528748512268],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 9, 6, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 9, 2, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 14, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(0, 15, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.7904300475493073e-003, 1.5286679845303297e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.1729114055633545, 0.0923336669802666, -0.3786273896694183],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 13, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(19, 13, 2, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 0, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(22, 1, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.4419040419161320e-003, 5.7356068864464760e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2550059854984283, 0.5377908945083618, -0.6406956911087036],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 11, 2, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 11, 1, 6)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 2, 7, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 3, 7, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0128838298842311, -9.2986654490232468e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.1594886034727097, 0.1545201987028122, -0.3551310896873474],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 11, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 12, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 9, 4, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 10, 2, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [9.1675558360293508e-004, 5.4828119464218616e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9430146813392639, -0.2156146019697189, 0.4936152100563049],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 1, 3, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 1, 1, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 0, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 0, 4, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.9684118926525116e-003, -0.0134628200903535],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2461574971675873, 0.2181462943553925, -0.2652387917041779],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 11, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 12, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 9, 4, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 10, 2, 8)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0134097002446651, -0.0120696499943733],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.8737457990646362, 0.2798370122909546, -0.5117422938346863],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 11, 4, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 12, 4, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 9, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 10, 8, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0198671892285347, -3.1738479156047106e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.1502380967140198, 0.3316602110862732, -0.1740657985210419],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 12, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(16, 12, 2, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 11, 3, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(14, 11, 1, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [2.3204570170491934e-003, 0.0958538502454758],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7874010205268860, 0.3101820051670075, -0.7884839773178101],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 0, 2, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(4, 1, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 2, 13, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 2, 13, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-4.1345478966832161e-003, -1.8291670130565763e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6971132159233093, 0.3448216915130615, -0.2230684012174606],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(14, 12, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(15, 12, 2, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 11, 3, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(18, 11, 1, 9)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 11,
            threshold: -1.0087829828262329,
            parent: 16,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-4.0171439759433270e-003, -3.5027179401367903e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3690172135829926, 0.4209553897380829, -0.6564388871192932],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 11, 2, 10)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 11, 1, 10)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 10, 3, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 10, 1, 10)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0213945098221302, -0.1266490966081619],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.0898974463343620, 0.5328338742256165, -0.2239761948585510],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 12, 3, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(18, 13, 1, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 2, 19, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 4, 19, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.9717645421624184e-003, 3.1717729289084673e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8054519295692444, -0.3058784902095795, 0.5079339146614075],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 12, 5, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(6, 13, 5, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 13, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 14, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.7093250062316656e-003, 4.1504349792376161e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2656677961349487, 0.1200577989220619, -0.7781180739402771],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(16, 11, 6, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(16, 11, 3, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(22, 21, 2, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(23, 21, 1, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(22, 22, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-6.8968691630288959e-004, 7.3131551034748554e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.6343017816543579, -0.4965946972370148, 0.5045747756958008],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 3, 4)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 13, 1, 4)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 6, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 7, 2, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.3451400920748711e-003, -0.0843663364648819],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.0591170787811279, 0.2253409028053284, -0.5044180750846863],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(21, 2, 3, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(22, 3, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 2, 24, 9)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 2, 12, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [1.3679439434781671e-003, -0.0445024296641350],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8495119810104370, 0.5061025023460388, -0.2619647979736328],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 2, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 3, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 4, 12, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 4, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0124622099101543, 4.3333731591701508e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.3516007959842682, -0.2314963936805725, 0.2652443051338196],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 9, 3, 10)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(18, 10, 1, 10)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 6, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 7, 9, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-7.7183251269161701e-003, 0.1024885997176170],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8581439256668091, -0.3978965878486633, 0.8472561836242676],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 6, 9, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 7, 9, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(5, 2, 9, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 5, 9, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-2.3860989604145288e-003, -0.0159588195383549],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.3658573925495148, -0.8716648817062378, 0.0768361166119576],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 4, 11, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 5, 11, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 9, 4, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 10, 4, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-1.8428879557177424e-003, 0.0149974804371595],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8212407827377319, 0.4106405079364777, -0.8073685765266419],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 1, 1, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(2, 2, 1, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 0, 6, 18)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 9, 6, 9)
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
