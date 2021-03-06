'use strict';

angular.module('testApp').factory('UserData', function(){

  var users = 
  [
      {
        '_id': '54346047174b54f2d3f051aa',
        'index': 0,
        'guid': '41d437f6-92af-489c-b6f0-7ca016ff5c84',
        'isActive': true,
        'balance': '$3,292.06',
        'picture': 'http://placehold.it/32x32',
        'age': 34,
        'eyeColor': 'brown',
        'name': {
          'first': 'Jennifer',
          'last': 'Gomez'
        },
        'company': 'ETERNIS',
        'email': 'jennifer.gomez@eternis.org',
        'phone': '+1 (922) 592-3171',
        'address': '584 Montgomery Street, Goldfield, Colorado, 1538',
        'about': 'Elit labore reprehenderit excepteur duis eiusmod cupidatat officia cupidatat minim sunt in proident. Minim excepteur anim ea elit. Ea consequat dolore sint veniam ad veniam laboris. Adipisicing eu officia nulla in excepteur dolor ipsum aliquip laboris magna enim Lorem eiusmod. Ea eiusmod eiusmod magna excepteur dolor consectetur laborum irure et quis ullamco laborum. Incididunt in est consectetur dolore officia nisi non.\r\n',
        'registered': 'Wednesday, September 3, 2014 4:39 PM',
        'latitude': 1.735013,
        'longitude': 95.1767,
        'tags': [
        'ea',
        'elit',
        'nulla',
        'dolore',
        'tempor',
        'aute',
        'tempor'
        ],
        'range': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
        ],
        'friends': [
        {
          'id': 0,
          'name': 'Berta Montoya'
        },
        {
          'id': 1,
          'name': 'Phyllis Sanchez'
        },
        {
          'id': 2,
          'name': 'Naomi Roman'
        }
        ],
        'greeting': 'Hello, Jennifer! You have 8 unread messages.',
        'favoriteFruit': 'apple'
      },
      {
        '_id': '54346047450fb9cbb26213dc',
        'index': 1,
        'guid': '8b064e11-1551-4c40-8995-91938d5d1c6b',
        'isActive': false,
        'balance': '$1,561.03',
        'picture': 'http://placehold.it/32x32',
        'age': 21,
        'eyeColor': 'brown',
        'name': {
          'first': 'Jewell',
          'last': 'Booth'
        },
        'company': 'TWIGGERY',
        'email': 'jewell.booth@twiggery.biz',
        'phone': '+1 (856) 469-3253',
        'address': '695 Thornton Street, Gorst, North Dakota, 177',
        'about': 'Dolor proident proident sunt id officia in excepteur culpa irure anim duis ipsum quis non. Nulla occaecat esse aliqua deserunt et id amet nulla dolore veniam incididunt. Adipisicing dolor duis occaecat magna in nisi id in aliqua consequat ea dolor.\r\n',
        'registered': 'Wednesday, May 28, 2014 10:15 AM',
        'latitude': 71.443951,
        'longitude': -117.010475,
        'tags': [
        'sunt',
        'tempor',
        'laboris',
        'esse',
        'non',
        'enim',
        'occaecat'
        ],
        'range': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
        ],
        'friends': [
        {
          'id': 0,
          'name': 'Baird Buchanan'
        },
        {
          'id': 1,
          'name': 'Kirsten Mullen'
        },
        {
          'id': 2,
          'name': 'Cortez Howe'
        }
        ],
        'greeting': 'Hello, Jewell! You have 9 unread messages.',
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '543460474c841282a79eafa8',
        'index': 2,
        'guid': '9c4f6209-0547-4f4a-95a9-1b2b08ee649c',
        'isActive': false,
        'balance': '$3,060.21',
        'picture': 'http://placehold.it/32x32',
        'age': 24,
        'eyeColor': 'brown',
        'name': {
          'first': 'Taylor',
          'last': 'Guzman'
        },
        'company': 'SCENTRIC',
        'email': 'taylor.guzman@scentric.ca',
        'phone': '+1 (998) 531-2076',
        'address': '146 Story Street, Norwood, Virginia, 2578',
        'about': 'Aliqua ad adipisicing aute Lorem et enim fugiat qui non consectetur. Reprehenderit est dolor et laborum quis do incididunt do Lorem. Enim aliquip veniam sint magna consequat cillum consectetur est incididunt id sunt minim occaecat ullamco.\r\n',
        'registered': 'Tuesday, March 25, 2014 11:02 AM',
        'latitude': -32.006274,
        'longitude': 100.998101,
        'tags': [
        'ut',
        'ex',
        'nostrud',
        'est',
        'laborum',
        'excepteur',
        'ad'
        ],
        'range': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
        ],
        'friends': [
        {
          'id': 0,
          'name': 'Navarro Knapp'
        },
        {
          'id': 1,
          'name': 'Page Chan'
        },
        {
          'id': 2,
          'name': 'Yang Davidson'
        }
        ],
        'greeting': 'Hello, Taylor! You have 5 unread messages.',
        'favoriteFruit': 'apple'
      },
      {
        '_id': '54346047da4103344199a3c4',
        'index': 3,
        'guid': 'f9995dcb-e513-4681-9076-46e66683c39d',
        'isActive': true,
        'balance': '$2,482.57',
        'picture': 'http://placehold.it/32x32',
        'age': 21,
        'eyeColor': 'blue',
        'name': {
          'first': 'Strong',
          'last': 'Wagner'
        },
        'company': 'PHORMULA',
        'email': 'strong.wagner@phormula.com',
        'phone': '+1 (979) 435-2504',
        'address': '846 Clifford Place, Accoville, Texas, 7027',
        'about': 'Anim id pariatur eiusmod non consectetur pariatur commodo. Mollit commodo do veniam dolore. Occaecat ut excepteur deserunt dolor dolore consequat sit amet esse et. Dolor amet nostrud amet tempor ipsum minim magna voluptate velit anim nisi mollit. Sint id consequat laboris enim laborum sint ea anim pariatur sunt excepteur elit elit cupidatat.\r\n',
        'registered': 'Monday, May 26, 2014 4:32 AM',
        'latitude': 20.704581,
        'longitude': 50.417502,
        'tags': [
        'do',
        'dolor',
        'sint',
        'et',
        'occaecat',
        'officia',
        'amet'
        ],
        'range': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
        ],
        'friends': [
        {
          'id': 0,
          'name': 'Chasity Patrick'
        },
        {
          'id': 1,
          'name': 'Vinson Boyd'
        },
        {
          'id': 2,
          'name': 'Whitley Soto'
        }
        ],
        'greeting': 'Hello, Strong! You have 9 unread messages.',
        'favoriteFruit': 'apple'
      },
      {
        '_id': '54346047df65f49171eea0c5',
        'index': 4,
        'guid': '2a5ae31a-5ac1-410d-96ad-6185d1eb1720',
        'isActive': true,
        'balance': '$2,218.01',
        'picture': 'http://placehold.it/32x32',
        'age': 33,
        'eyeColor': 'brown',
        'name': {
          'first': 'Terri',
          'last': 'Joseph'
        },
        'company': 'GOKO',
        'email': 'terri.joseph@goko.co.uk',
        'phone': '+1 (860) 506-2357',
        'address': '780 Hendrickson Place, Charco, California, 8306',
        'about': 'Incididunt elit non nostrud mollit cupidatat proident eiusmod quis cillum laboris ipsum anim veniam enim. Labore ipsum magna est minim irure ullamco velit laborum irure cillum dolor. Commodo incididunt amet laborum veniam et labore dolor enim duis. Cupidatat incididunt in veniam nostrud consequat veniam eu deserunt. Excepteur velit velit ut anim sunt aliqua ex esse in deserunt culpa esse culpa.\r\n',
        'registered': 'Thursday, September 25, 2014 10:28 AM',
        'latitude': -73.358908,
        'longitude': -59.142214,
        'tags': [
        'sunt',
        'eu',
        'non',
        'officia',
        'elit',
        'voluptate',
        'dolore'
        ],
        'range': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
        ],
        'friends': [
        {
          'id': 0,
          'name': 'Tracie Fowler'
        },
        {
          'id': 1,
          'name': 'Simone Navarro'
        },
        {
          'id': 2,
          'name': 'Ethel Hutchinson'
        }
        ],
        'greeting': 'Hello, Terri! You have 8 unread messages.',
        'favoriteFruit': 'banana'
      },
      {
        '_id': '543460472be93ebe447d0da1',
        'index': 5,
        'guid': '09579f60-1470-471c-9edf-a35474eb3cff',
        'isActive': true,
        'balance': '$3,618.55',
        'picture': 'http://placehold.it/32x32',
        'age': 36,
        'eyeColor': 'green',
        'name': {
          'first': 'Robertson',
          'last': 'Nolan'
        },
        'company': 'SILODYNE',
        'email': 'robertson.nolan@silodyne.net',
        'phone': '+1 (814) 496-2966',
        'address': '649 Gold Street, Choctaw, Delaware, 7761',
        'about': 'Officia voluptate exercitation incididunt ipsum laboris veniam eiusmod sit. Amet sit consectetur irure laboris ullamco. In irure veniam velit anim sunt. Veniam mollit velit commodo labore nulla id commodo mollit amet dolor. Duis sint est do id exercitation elit reprehenderit est elit sunt sit commodo id cillum. Laborum commodo occaecat do et ad.\r\n',
        'registered': 'Saturday, May 24, 2014 4:43 PM',
        'latitude': -69.655987,
        'longitude': 69.974491,
        'tags': [
        'eu',
        'et',
        'qui',
        'proident',
        'culpa',
        'ea',
        'nulla'
        ],
        'range': [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
        ],
        'friends': [
        {
          'id': 0,
          'name': 'Simon Alvarez'
        },
        {
          'id': 1,
          'name': 'Williams Vargas'
        },
        {
          'id': 2,
          'name': 'Roxanne Walls'
        }
        ],
        'greeting': 'Hello, Robertson! You have 7 unread messages.',
        'favoriteFruit': 'apple'
      }
  ];

  return users;
});