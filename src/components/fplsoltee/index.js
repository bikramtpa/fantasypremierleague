let myteam = [1, 2, 5, 6, 9, 9, 10, 11, 14, 15, 15, 16, 16, 16, 17]
// 8, 0, 3, 16, 18, 18, 11, 10, 19, 20, 20, 6, 6, 6, 7
let json = require('./fixture.json');
//console.log(json, 'the json obj');

//console.log(Object.keys(json));
const a = [{
    "code": 2128288,
    "event": 1,
    "finished": true,
    "finished_provisional": true,
    "id": 2,
    "kickoff_time": "2020-09-12T11:30:00Z",
    "minutes": 90,
    "provisional_start_time": false,
    "started": true,
    "team_a": 1,
    "team_a_score": 3,
    "team_h": 8,
    "team_h_score": 0,
    "stats": [{
        "identifier": "goals_scored",
        "a": [{
            "value": 1,
            "element": 4
          },
          {
            "value": 1,
            "element": 6
          },
          {
            "value": 1,
            "element": 494
          }
        ],
        "h": []
      },
      {
        "identifier": "assists",
        "a": [{
          "value": 3,
          "element": 478
        }],
        "h": []
      },
      {
        "identifier": "own_goals",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_saved",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_missed",
        "a": [],
        "h": []
      },
      {
        "identifier": "yellow_cards",
        "a": [{
            "value": 1,
            "element": 4
          },
          {
            "value": 1,
            "element": 11
          }
        ],
        "h": [{
            "value": 1,
            "element": 175
          },
          {
            "value": 1,
            "element": 178
          }
        ]
      },
      {
        "identifier": "red_cards",
        "a": [],
        "h": []
      },
      {
        "identifier": "saves",
        "a": [{
          "value": 2,
          "element": 8
        }],
        "h": [{
          "value": 2,
          "element": 186
        }]
      },
      {
        "identifier": "bonus",
        "a": [{
            "value": 3,
            "element": 494
          },
          {
            "value": 2,
            "element": 478
          },
          {
            "value": 1,
            "element": 6
          },
          {
            "value": 1,
            "element": 8
          }
        ],
        "h": []
      },
      {
        "identifier": "bps",
        "a": [{
            "value": 37,
            "element": 494
          },
          {
            "value": 35,
            "element": 478
          },
          {
            "value": 29,
            "element": 6
          },
          {
            "value": 29,
            "element": 8
          },
          {
            "value": 28,
            "element": 16
          },
          {
            "value": 25,
            "element": 17
          },
          {
            "value": 23,
            "element": 11
          },
          {
            "value": 21,
            "element": 15
          },
          {
            "value": 19,
            "element": 4
          },
          {
            "value": 15,
            "element": 526
          },
          {
            "value": 11,
            "element": 9
          },
          {
            "value": 6,
            "element": 501
          },
          {
            "value": 3,
            "element": 18
          },
          {
            "value": 3,
            "element": 22
          }
        ],
        "h": [{
            "value": 16,
            "element": 176
          },
          {
            "value": 14,
            "element": 373
          },
          {
            "value": 12,
            "element": 178
          },
          {
            "value": 12,
            "element": 182
          },
          {
            "value": 12,
            "element": 525
          },
          {
            "value": 11,
            "element": 175
          },
          {
            "value": 11,
            "element": 186
          },
          {
            "value": 10,
            "element": 187
          },
          {
            "value": 7,
            "element": 180
          },
          {
            "value": 4,
            "element": 181
          },
          {
            "value": 4,
            "element": 191
          },
          {
            "value": 3,
            "element": 184
          },
          {
            "value": 3,
            "element": 188
          },
          {
            "value": -2,
            "element": 190
          }
        ]
      }
    ],
    "team_h_difficulty": 3,
    "team_a_difficulty": 2
  },
  {
    "code": 2128287,
    "event": 1,
    "finished": true,
    "finished_provisional": true,
    "id": 1,
    "kickoff_time": "2020-09-12T14:00:00Z",
    "minutes": 90,
    "provisional_start_time": false,
    "started": true,
    "team_a": 16,
    "team_a_score": 0,
    "team_h": 6,
    "team_h_score": 1,
    "stats": [{
        "identifier": "goals_scored",
        "a": [],
        "h": [{
          "value": 1,
          "element": 141
        }]
      },
      {
        "identifier": "assists",
        "a": [],
        "h": [{
          "value": 1,
          "element": 137
        }]
      },
      {
        "identifier": "own_goals",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_saved",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_missed",
        "a": [],
        "h": []
      },
      {
        "identifier": "yellow_cards",
        "a": [{
          "value": 1,
          "element": 375
        }],
        "h": [{
            "value": 1,
            "element": 131
          },
          {
            "value": 1,
            "element": 142
          }
        ]
      },
      {
        "identifier": "red_cards",
        "a": [],
        "h": []
      },
      {
        "identifier": "saves",
        "a": [{
          "value": 2,
          "element": 363
        }],
        "h": [{
          "value": 5,
          "element": 128
        }]
      },
      {
        "identifier": "bonus",
        "a": [],
        "h": [{
            "value": 3,
            "element": 128
          },
          {
            "value": 2,
            "element": 137
          },
          {
            "value": 1,
            "element": 486
          }
        ]
      },
      {
        "identifier": "bps",
        "a": [{
            "value": 19,
            "element": 369
          },
          {
            "value": 17,
            "element": 363
          },
          {
            "value": 15,
            "element": 362
          },
          {
            "value": 15,
            "element": 370
          },
          {
            "value": 13,
            "element": 364
          },
          {
            "value": 12,
            "element": 367
          },
          {
            "value": 12,
            "element": 375
          },
          {
            "value": 11,
            "element": 376
          },
          {
            "value": 5,
            "element": 365
          },
          {
            "value": 4,
            "element": 361
          },
          {
            "value": 4,
            "element": 379
          },
          {
            "value": 4,
            "element": 382
          },
          {
            "value": 3,
            "element": 377
          },
          {
            "value": 1,
            "element": 366
          }
        ],
        "h": [{
            "value": 31,
            "element": 128
          },
          {
            "value": 26,
            "element": 137
          },
          {
            "value": 24,
            "element": 486
          },
          {
            "value": 23,
            "element": 146
          },
          {
            "value": 22,
            "element": 134
          },
          {
            "value": 18,
            "element": 141
          },
          {
            "value": 14,
            "element": 130
          },
          {
            "value": 6,
            "element": 138
          },
          {
            "value": 5,
            "element": 131
          },
          {
            "value": 3,
            "element": 133
          },
          {
            "value": 3,
            "element": 142
          },
          {
            "value": 3,
            "element": 489
          },
          {
            "value": -7,
            "element": 140
          }
        ]
      }
    ],
    "team_h_difficulty": 3,
    "team_a_difficulty": 2
  },
  {
    "code": 2128289,
    "event": 1,
    "finished": true,
    "finished_provisional": true,
    "id": 3,
    "kickoff_time": "2020-09-12T16:30:00Z",
    "minutes": 90,
    "provisional_start_time": false,
    "started": true,
    "team_a": 10,
    "team_a_score": 3,
    "team_h": 11,
    "team_h_score": 4,
    "stats": [{
        "identifier": "goals_scored",
        "a": [{
            "value": 1,
            "element": 198
          },
          {
            "value": 1,
            "element": 202
          },
          {
            "value": 1,
            "element": 203
          }
        ],
        "h": [{
            "value": 3,
            "element": 254
          },
          {
            "value": 1,
            "element": 250
          }
        ]
      },
      {
        "identifier": "assists",
        "a": [{
            "value": 1,
            "element": 200
          },
          {
            "value": 1,
            "element": 204
          },
          {
            "value": 1,
            "element": 205
          }
        ],
        "h": [{
            "value": 1,
            "element": 253
          },
          {
            "value": 1,
            "element": 255
          }
        ]
      },
      {
        "identifier": "own_goals",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_saved",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_missed",
        "a": [],
        "h": []
      },
      {
        "identifier": "yellow_cards",
        "a": [],
        "h": [{
          "value": 1,
          "element": 249
        }]
      },
      {
        "identifier": "red_cards",
        "a": [],
        "h": []
      },
      {
        "identifier": "saves",
        "a": [{
          "value": 3,
          "element": 213
        }],
        "h": []
      },
      {
        "identifier": "bonus",
        "a": [{
            "value": 2,
            "element": 198
          },
          {
            "value": 1,
            "element": 202
          }
        ],
        "h": [{
          "value": 3,
          "element": 254
        }]
      },
      {
        "identifier": "bps",
        "a": [{
            "value": 33,
            "element": 198
          },
          {
            "value": 28,
            "element": 202
          },
          {
            "value": 24,
            "element": 204
          },
          {
            "value": 23,
            "element": 203
          },
          {
            "value": 21,
            "element": 200
          },
          {
            "value": 20,
            "element": 213
          },
          {
            "value": 19,
            "element": 211
          },
          {
            "value": 18,
            "element": 205
          },
          {
            "value": 15,
            "element": 197
          },
          {
            "value": 14,
            "element": 491
          },
          {
            "value": 8,
            "element": 193
          },
          {
            "value": 6,
            "element": 210
          },
          {
            "value": 5,
            "element": 206
          }
        ],
        "h": [{
            "value": 69,
            "element": 254
          },
          {
            "value": 20,
            "element": 255
          },
          {
            "value": 19,
            "element": 244
          },
          {
            "value": 19,
            "element": 250
          },
          {
            "value": 14,
            "element": 251
          },
          {
            "value": 13,
            "element": 253
          },
          {
            "value": 13,
            "element": 260
          },
          {
            "value": 10,
            "element": 249
          },
          {
            "value": 10,
            "element": 259
          },
          {
            "value": 9,
            "element": 243
          },
          {
            "value": 9,
            "element": 252
          },
          {
            "value": 2,
            "element": 246
          },
          {
            "value": 2,
            "element": 261
          },
          {
            "value": 2,
            "element": 263
          }
        ]
      }
    ],
    "team_h_difficulty": 2,
    "team_a_difficulty": 5
  },
  {
    "code": 2128293,
    "event": 1,
    "finished": true,
    "finished_provisional": true,
    "id": 6,
    "kickoff_time": "2020-09-12T19:00:00Z",
    "minutes": 90,
    "provisional_start_time": false,
    "started": true,
    "team_a": 14,
    "team_a_score": 2,
    "team_h": 19,
    "team_h_score": 0,
    "stats": [{
        "identifier": "goals_scored",
        "a": [{
            "value": 1,
            "element": 485
          },
          {
            "value": 1,
            "element": 506
          }
        ],
        "h": []
      },
      {
        "identifier": "assists",
        "a": [{
            "value": 1,
            "element": 339
          },
          {
            "value": 1,
            "element": 485
          }
        ],
        "h": []
      },
      {
        "identifier": "own_goals",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_saved",
        "a": [],
        "h": []
      },
      {
        "identifier": "penalties_missed",
        "a": [],
        "h": []
      },
      {
        "identifier": "yellow_cards",
        "a": [{
            "value": 1,
            "element": 332
          },
          {
            "value": 1,
            "element": 336
          }
        ],
        "h": [{
            "value": 1,
            "element": 436
          },
          {
            "value": 1,
            "element": 438
          }
        ]
      },
      {
        "identifier": "red_cards",
        "a": [],
        "h": []
      },
      {
        "identifier": "saves",
        "a": [{
          "value": 3,
          "element": 325
        }],
        "h": []
      },
      {
        "identifier": "bonus",
        "a": [{
            "value": 3,
            "element": 485
          },
          {
            "value": 2,
            "element": 506
          },
          {
            "value": 1,
            "element": 513
          }
        ],
        "h": []
      },
      {
        "identifier": "bps",
        "a": [{
            "value": 41,
            "element": 485
          },
          {
            "value": 32,
            "element": 506
          },
          {
            "value": 31,
            "element": 513
          },
          {
            "value": 27,
            "element": 323
          },
          {
            "value": 27,
            "element": 332
          },
          {
            "value": 26,
            "element": 325
          },
          {
            "value": 21,
            "element": 328
          },
          {
            "value": 13,
            "element": 339
          },
          {
            "value": 12,
            "element": 321
          },
          {
            "value": 12,
            "element": 336
          },
          {
            "value": 7,
            "element": 338
          },
          {
            "value": 4,
            "element": 340
          },
          {
            "value": 3,
            "element": 320
          },
          {
            "value": 3,
            "element": 480
          }
        ],
        "h": [{
            "value": 15,
            "element": 448
          },
          {
            "value": 15,
            "element": 451
          },
          {
            "value": 14,
            "element": 432
          },
          {
            "value": 14,
            "element": 438
          },
          {
            "value": 11,
            "element": 435
          },
          {
            "value": 9,
            "element": 431
          },
          {
            "value": 8,
            "element": 427
          },
          {
            "value": 8,
            "element": 450
          },
          {
            "value": 7,
            "element": 449
          },
          {
            "value": 5,
            "element": 440
          },
          {
            "value": 5,
            "element": 445
          },
          {
            "value": 2,
            "element": 441
          },
          {
            "value": -1,
            "element": 436
          }
        ]
      }
    ],
    "team_h_difficulty": 2,
    "team_a_difficulty": 2
  },
  {
    "code": 2128292,
    "event": 1,
    "finished": false,
    "finished_provisional": false,
    "id": 5,
    "kickoff_time": "2020-09-13T13:00:00Z",
    "minutes": 0,
    "provisional_start_time": false,
    "started": false,
    "team_a": 9,
    "team_a_score": null,
    "team_h": 18,
    "team_h_score": null,
    "stats": [],
    "team_h_difficulty": 3,
    "team_a_difficulty": 2
  },
  {
    "code": 2128291,
    "event": 1,
    "finished": false,
    "finished_provisional": false,
    "id": 4,
    "kickoff_time": "2020-09-13T15:30:00Z",
    "minutes": 0,
    "provisional_start_time": false,
    "started": false,
    "team_a": 7,
    "team_a_score": null,
    "team_h": 17,
    "team_h_score": null,
    "stats": [],
    "team_h_difficulty": 2,
    "team_a_difficulty": 4
  },
  {
    "code": 2128295,
    "event": 1,
    "finished": false,
    "finished_provisional": false,
    "id": 8,
    "kickoff_time": "2020-09-14T17:00:00Z",
    "minutes": 0,
    "provisional_start_time": false,
    "started": false,
    "team_a": 20,
    "team_a_score": null,
    "team_h": 15,
    "team_h_score": null,
    "stats": [],
    "team_h_difficulty": 3,
    "team_a_difficulty": 4
  },
  {
    "code": 2128294,
    "event": 1,
    "finished": false,
    "finished_provisional": false,
    "id": 7,
    "kickoff_time": "2020-09-14T19:15:00Z",
    "minutes": 0,
    "provisional_start_time": false,
    "started": false,
    "team_a": 5,
    "team_a_score": null,
    "team_h": 3,
    "team_h_score": null,
    "stats": [],
    "team_h_difficulty": 3,
    "team_a_difficulty": 2
  }
];
console.log(a.length)
const emptyarr = [];
for (var i = 0; i < myteam.length; i++) {
  var found = false;
  for (var j = 0; j < a.length; j++) {
    if (a[j].event == 1) {
      if (a[j].team_a == myteam[i]) {
        found = true;
        // console.log(a[j].team_h)
        emptyarr.push(a[j].team_h)
        continue
      }
      if (a[j].team_h == myteam[i]) {
        found = true
        // console.log(a[j].team_a)
        emptyarr.push(a[j].team_a)
        continue
      }
    }
  }
  if (found == false) {
    // console.log(0)
    emptyarr.push(0)
  }
}
console.log(emptyarr)