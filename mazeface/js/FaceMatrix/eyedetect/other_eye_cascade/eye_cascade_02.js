/**
 * Created with JetBrains WebStorm.
 * User: liuqiushan
 * Date: 13-8-22
 * Time: 上午9:48
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
    count: 11,
    orig_window_size: new WindowSize(24, 24),
    stage_classifier: [
        {
            count: 2,
            threshold: -0.2854751050472260,
            parent: -1,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0540823005139828, 0.0151629503816366],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9694926142692566, 1., -1.0000469684600830],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 0, 18, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 3, 18, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 8, 12, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 8, 6, 7)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0449097417294979, 8.9780138805508614e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.9926816821098328, -0.8000692725181580, 0.6840174794197083],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(4, 0, 18, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(4, 3, 18, 3)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 16, 2, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 20, 2, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 2,
            threshold: -0.0362227596342564,
            parent: 0,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0380371101200581, -8.1539209932088852e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9333394169807434, 0.9437510967254639, -1.0000159740447998],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 11, 18, 3)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 11, 6, 3)
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
                                    r: new Rect(6, 2, 12, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0402422696352005, -0.0556914582848549],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8971167206764221, 0.8407871723175049, -0.4863058924674988],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 2, 11, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(7, 4, 11, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 11, 12, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 11, 4, 6)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.9022948741912842,
            parent: 1,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0313455499708653, -0.0290483199059963],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.9241845011711121, 0.8889564275741577, -0.8480743169784546],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 14, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 10, 7, 5)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(1, 1, 22, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(1, 3, 22, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0153071898967028, 8.5575180128216743e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7994866967201233, -0.5251768827438355, 0.8548746109008789],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 13, 8, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 13, 4, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(13, 11, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(15, 11, 2, 6)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0138590298593044, 0.1246747970581055],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7775971293449402, 0.9374241232872009, -0.7930709123611450],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 8, 6, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(9, 10, 6, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 11, 15, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 15, 15, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 2,
            threshold: -1.2245589494705200,
            parent: 2,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.1416677981615067, -1.7961020348593593e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8465976119041443, 0.8655462265014648, -0.8756886124610901],
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
                                    r: new Rect(11, 0, 1, 18)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 9, 1, 9)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0580416694283485, -0.0419013984501362],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7144511938095093, 0.4062448143959045, -0.3488700091838837],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 3, 21, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(3, 5, 21, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 12, 18, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(9, 12, 6, 2)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -1.0250760316848755,
            parent: 3,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-0.0576585195958614, 0.0384829789400101],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7854254245758057, 0.9019700288772583, -0.7795106172561646],
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
                                    r: new Rect(0, 11, 24, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 11, 12, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 13, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1970265954732895, -6.5021042246371508e-004],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8773928284645081, 0.6180700063705444, -0.1681458950042725],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 3, 6, 21)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(11, 10, 2, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 15, 3, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(13, 15, 1, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.1441671997308731, 3.8289038930088282e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7681198716163635, -0.8577206730842590, 0.7707939743995667],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 11, 24, 3)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(8, 12, 8, 1)
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
                }
            ]
        },
        {
            count: 3,
            threshold: -0.8264120221138001,
            parent: 4,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [3.1205720733851194e-003, 2.5823239702731371e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.6809772849082947, -0.8338999748229981, 0.7212669253349304],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 6, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 7, 2, 1)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 13, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 13, 1, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0713667273521423, -0.0190081205219030],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6039214730262756, 0.2783232033252716, -0.6532444953918457],
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
                                    r: new Rect(13, 0, 3, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(13, 3, 3, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0127825504168868, -0.0201775301247835],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8702324032783508, 0.6114094257354736, -0.7254369854927063],
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
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(12, 12, 6, 5)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(14, 14, 2, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 5,
            threshold: -1.0686310529708862,
            parent: 5,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0217112507671118, 2.0092730410397053e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.7775868773460388, -0.6837983727455139, 0.8589661121368408],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 12, 6, 12)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 12, 3, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(3, 18, 3, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 14, 4, 1)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 14, 2, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.6012358292937279e-003, -0.1003689989447594],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.3512465059757233, 0.4943859875202179, -0.4692589938640595],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(19, 6, 2, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(18, 7, 2, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 9, 12, 6)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(10, 11, 4, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0140585703775287, -0.0108120897784829],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6100106835365295, -1., 0.7910466790199280],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 1, 4, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 3, 4, 2)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 23, 15, 1)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(5, 23, 5, 1)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0235346201807261, -4.7665517777204514e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.7654595971107483, 0.8155500888824463, -0.1311171054840088],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 11, 6, 9)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 11, 2, 9)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 13, 4, 3)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 13, 2, 3)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.3321619927883148, -6.0923458077013493e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.9060376286506653, 0.6276950836181641, -0.6935153007507324],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 10, 24, 6)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(8, 12, 8, 2)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 8, 3, 7)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(8, 9, 1, 7)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 2,
            threshold: -0.6465631723403931,
            parent: 6,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-7.3404721915721893e-003, 2.8289980255067348e-003],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.8413426876068115, 0.7596995830535889, -0.8453248739242554],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 1, 2, 16)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 9, 2, 8)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 0, 14, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 0, 7, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 2, 7, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [6.1481597367674112e-004, -0.1322346031665802],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6447095870971680, -0.8305919766426086, 0.1987617015838623],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(17, 11, 5, 12)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(17, 15, 5, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 9, 22, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 11, 22, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.8174331784248352,
            parent: 7,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [8.2959141582250595e-003, -0.0176804903894663],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.8762773275375366, 0.5123699903488159, -0.8543527126312256],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 9, 2, 7)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 9, 1, 7)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(9, 7, 12, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(8, 8, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0168845206499100, -0.0129315499216318],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.2644861042499542, -0.9791188836097717, 0.1870663017034531],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(10, 12, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(12, 12, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 20, 12, 2)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 20, 4, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0133196795359254, -0.0191605091094971],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [0.8531817793846130, 1., -0.7145916223526001],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 6, 6)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(10, 12, 2, 6)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(3, 13, 8, 5)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(5, 13, 4, 5)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.9802383780479431,
            parent: 8,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [0.0424060896039009, -4.1949688456952572e-003],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.7391303777694702, -0.9093078970909119, 0.9371383786201477],
                    haar_feature: [
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 16, 10, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 20, 10, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 12, 12, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 14, 12, 2)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0662072226405144, -0.0480201989412308],
                    left: [0, -1],
                    right: [1, -2],
                    alpha: [-0.8290107250213623, -0.6913700103759766, 0.2800931036472321],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 16, 24, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 20, 24, 4)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(2, 11, 20, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(12, 11, 10, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(2, 15, 10, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.4117060899734497, -3.5730531089939177e-004],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.5212010741233826, 0.9115579128265381, -0.8286898732185364],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(6, 3, 12, 21)
                                },
                                {
                                    weight: 9.0,
                                    r: new Rect(10, 10, 4, 7)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(0, 1, 24, 2)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(0, 2, 24, 1)
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            count: 3,
            threshold: -0.7273814082145691,
            parent: 9,
            next: -1,
            child: -1,
            classifier: [
                {
                    count: 2,
                    threshold: [-6.2411730177700520e-003, -0.0470857992768288],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.7065082788467407, -0.8637992739677429, 0.8907322883605957],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(7, 0, 1, 6)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(7, 3, 1, 3)
                                }
                            ]
                        },
                        {
                            tilted: 1,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 6, 6, 8)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(6, 8, 6, 4)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [-0.0211095102131367, -0.0510341413319111],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [-0.6918622255325317, 0.4397050142288208, -0.4118253886699677],
                    haar_feature: [
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(11, 4, 2, 20)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(11, 9, 2, 10)
                                }
                            ]
                        },
                        {
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 0, 9, 22)
                                },
                                {
                                    weight: 3.0,
                                    r: new Rect(11, 0, 3, 22)
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 2,
                    threshold: [0.0707213208079338, -0.0256045907735825],
                    left: [1, -1],
                    right: [0, -2],
                    alpha: [0.8282799720764160, 1., -0.8935558795928955],
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
                            tilted: 0,
                            rect: [
                                {
                                    weight: -1.0,
                                    r: new Rect(8, 12, 8, 4)
                                },
                                {
                                    weight: 2.0,
                                    r: new Rect(10, 12, 4, 4)
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};