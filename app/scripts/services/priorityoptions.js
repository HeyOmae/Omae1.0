'use strict';

/**
 * @ngdoc service
 * @name heyOmaegithubioApp.PriorityOptions
 * @description
 * # PriorityOptions
 * Factory in the heyOmaegithubioApp.
 */
angular.module('heyOmaegithubioApp')
  .factory('PriorityOptions', function () {
    // Service logic
    // ...

    var magePriority = {
      a: {
        magic: 6,
        skills: {
          attibute: "magic",
          rating: 5,
          ammount: 2
        },
        spells: 10
      },
      b: {
        magic: 4,
        skills: {
          attibute: "magic",
          rating: 4,
          ammount: 2
        },
        spells: 7
      },
      c: {
        magic: 3,
        spells: 5
      }
    }

    var priority = {
      metatype: {
        a: {
          human: {
            special: 9
          },
          elf: {
            special: 8
          },
          dwarf: {
            special: 7
          },
          ork: {
            special: 7
          },
          troll: {
            special: 5
          }
        },

        b: {
          human: {
            special: 7
          },
          elf: {
            special: 6
          },
          dwarf: {
            special: 4
          },
          ork: {
            special: 4
          },
          troll: {
            special: 0
          }
        },

        c: {
          human: {
            special: 5
          },
          elf: {
            special: 3
          },
          dwarf: {
            special: 1
          },
          ork: {
            special: 0
          }
        },

        d: {
          human: {
            special: 3
          },
          elf: {
            special: 0
          }
        },

        e: {
          human: {
            special: 1
          }
        }
      },//end of metatype

      attibutes: {
        a: 24,
        b: 20,
        c: 16,
        d: 14,
        e: 12
      },

      magic: {
        a: {
          mage: magePriority.a,
          mystic: magePriority.a,
          
          technomancer: {
            resonance: 6,
            skills: {
              attibute: "resonance",
              rating: 5,
              ammount: 2
            },
            complexform: 5
          }
        },

        b: {
          mage: magePriority.b,
          mystic: magePriority.b,

          technomancer: {
            resonance: 4,
            skills: {
              attibute: "resonance",
              rating: 4,
              ammount: 2
            },
            complexform: 2
          },

          adept: {
            magic: 6,
            skills: {
              rating: 4,
              ammount: 1
            }
          },

          aspected: {
            magic: 5,
            skillgroup: {
              attibute: "magic",
              rating: 4,
              ammount: 1
            }
          }
        },

        c: {
          mage: magePriority.c,
          mystic: magePriority.c,

          technomancer: {
            resonance: 3,
            complexform: 1
          },

          adept: {
            magic: 4,
            skills: {
              rating: 2,
              ammount: 1
            }
          },

          aspected: {
            magic: 3,
            skillgroup: {
              attibute: "magic",
              rating: 2,
              ammount: 1
            }
          }
        },

        d: {
          adept: {
            magic: 2
          },
          aspected: {
            magic: 2
          }
        },

        e: {
          mundane: {
            nothing: "–"
          }
        }
      },

      skills: {
        a: {
          skills: 46,
          skillgroups: 10
        },

        b: {
          skills: 36,
          skillgroups: 5
        },

        c: {
          skills: 28,
          skillgroups: 2
        },

        d: {
          skills: 22,
          skillgroups: 0
        },

        e: {
          skills: 18,
          skillgroups: 0
        }
      },

      resources: {
        a: 450000,
        b: 275000,
        c: 140000,
        d: 50000,
        e: 6000
      }

    }

    // Public API here
    return priority;
  });
