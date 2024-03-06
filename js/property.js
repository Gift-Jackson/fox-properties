const properties = [
    {
        "id": 0,
        "address": "123 Lakeview St",
        "unit": "Apt 101",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=9b14727ab72ca1f0bc938d2c19ba9393-5410274-images-thumbs&n=13"
    },
    {
        "id": 1,
        "address": "456 Lakeview Ave",
        "unit": "Unit B",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=a8eed5c602acfe70462132e687569b253ba2e7de-10727636-images-thumbs&n=13"
    },
    {
        "id": 2,
        "address": "789 Lakeview Blvd",
        "unit": "Unit 201",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=5babcca79807c6e1e9a7c9c267dc1cf5c8ff0ede-12445014-images-thumbs&n=13"
    },
    {
        "id": 3,
        "address": "321 Lakeview Ct",
        "unit": "Unit 301",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 2,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=fb42f5c16b68916680338166f5d0af56445c981a-11008180-images-thumbs&n=13"
    },
    {
        "id": 4,
        "address": "741 Lakeview Dr",
        "unit": "Unit 401",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": {
            "min": 120000,
            "max": 140000
        },
        "image_links": "https://avatars.mds.yandex.net/i?id=180670d8b070effd99927c09336cecebf478eabf-10157084-images-thumbs&n=13"
    },
    {
        "id": 5,
        "address": "852 Lakeview Ln",
        "unit": "Unit 501",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=c4d75473a11f4e4ce59f097174e2caddf73e293a-5232212-images-thumbs&n=13"
    },
    {
        "id": 6,
        "address": "963 Lakeview Loop",
        "unit": "Apt 601",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=20825f71789bae6dabbdf439445bbdcacd1f2396-12480039-images-thumbs&n=13"
    },
    {
        "id": 7,
        "address": "852 Lakeview Ln",
        "unit": "Unit 701",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=7fa12b0ce35e9ec754aa3a6b5a71cdc6685e7940-9840106-images-thumbs&n=13"
    },
    {
        "id": 8,
        "address": "741 Lakeview Dr",
        "unit": "Unit 801",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=6f6d6c0ef6fc96a87e765e267a1ed72fcf61b8d0-7549373-images-thumbs&n=13"
    },
    {
        "id": 9,
        "address": "963 Lakeview Loop",
        "unit": "Apt 901",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=84a1a22c5e59aa6536df74dba651387e9ee98950-11516533-images-thumbs&n=13"
    },
    {
        "id": 10,
        "address": "951 Lakeview Pkwy",
        "unit": "Unit 1001",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price":120000,
        "image_links": "https://avatars.mds.yandex.net/i?id=781e3bbd9ff639c1c53a3e863b7183b59d086af9-10752576-images-thumbs&n=13"
    },
    {
        "id": 11,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1101",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=cb47fc633c4da747ef4f5050479f9d8133ffa7ab-8744212-images-thumbs&n=13"
    },
    {
        "id": 12,
        "address": "852 Lakeview Ln",
        "unit": "Unit 1201",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=74cf5cc601c4f554dec4710c9e97fd03f126a857-8216657-images-thumbs&n=13"
    },
    {
        "id": 13,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1301",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=def3658b8683878e748f5d8f51c682e232c72990-11271031-images-thumbs&n=13"
    },
    {
        "id": 14,
        "address": "741 Lakeview Dr",
        "unit": "Unit 1401",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=ce25da107c1d6bec8c163704ed8bb23513f9ec05-8474442-images-thumbs&n=13"
    },
    
    {
        "id": 669489,
        "address": "82225 F St",
        "unit": "Unit 1A",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 2,
        "bath": 2,
        "price": 184900,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/contemporary-southside-duplex-axis-productions-img~5611d1cf0e48b744_0198-1-771a267-w360-h360-b0-p0.jpg"
        ]
    },
    {
        "id": 389155,
        "address": "34647 Camphor Dr",
        "unit": "Unit 2B",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 2,
        "bath": 2,
        "price": 259900,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/pearl-street-duplex-residence-bcdc-b-costello-design-and-consulting-llc-img~b8d18808013e6a72_0955-1-150d37d-w360-h360-b0-p0.jpg"
        ]
    },
    {
        "id": 140241,
        "address": "6626 83rd Ave N",
        "unit": "Unit 3C",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 2,
        "bath": 3,
        "price": 139900,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/golden-duplex-f9-productions-inc-img~57c18dc006847423_6412-1-c19cb5c-w360-h360-b0-p0.jpg"
        ]
    },
    {
        "id": 204778,
        "address": "93104 5th St N",
        "unit": "Unit 4D",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 2,
        "bath": 2,
        "price": 399990,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/stapleton-eastbridge-townhome-art-of-home-team-img~d831eb6f0db9eafc_2819-1-50ad858-w360-h360-b0-p0.jpg"
        ]
    },
    {
        "id": 361195,
        "address": "Marisol Plan, Townes at Bayou Heights",
        "unit": "# 3VCDU5",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 3,
        "bath": 3,
        "price": 496990,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/somerville-ma-multi-family-renovation-sl-haus-group-llc-img~5cb191df0f05ecdf_3878-1-dea2da9-w360-h360-b0-p0.jpg"
        ]
    },
    {
        "id": 53792,
        "address": "Palermo Plan, Townes at Bayou Heights",
        "unit": "# QHJ14C",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 4,
        "bath": 3,
        "price": 480990,
        "image_links": [
          "https://st.hzcdn.com/fimgs/06515dba0570cbdb_1039-w360-h360-b0-p0--.jpg"
        ]
    },
    {
        "id": 223927,
        "address": "Capri Plan, Townes at Bayou Heights",
        "unit": "# IS7TCN",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 3,
        "bath": 3,
        "price": 456990,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/macpherson-street-bronte-bka-architecture-pty-ltd-img~60b109e005a4a196_9743-1-d26aa55-w450-h450-b0-p0.jpg"
        ]
    },
    {
        "id": 442915,
        "address": "Verona Plan, Townes at Bayou Heights",
        "unit": "# 8HSX1I",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 4,
        "bath": 3,
        "price": 514990,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/haeuser/gartenansicht-sieckmann-walther-architekten-img~3a41dc040ae1b410_9790-1-2cb98c3-w450-h450-b0-p0.jpg"
        ]
    },
    {
        "id": 675333,
        "address": "6563 95th Pl N",
        "unit": "Unit 9J",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 4,
        "bath": 3,
        "price": 488825,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/seeing-double-dual-occupancy-studio56-building-design-img~65b17f650bc82516_0022-1-2670046-w450-h450-b0-p0.jpg"
        ]
    },
    {
        "id": 598356,
        "address": "6568 95th Pl N",
        "unit": "Unit 10K",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 4,
        "bath": 3,
        "price": 523990,
        "image_links": [
          "https://st.hzcdn.com/fimgs/pictures/exteriors/baulkham-hills-buildrite-img~23c110120f0e8fca_3469-1-1f09435-w360-h360-b0-p0.jpg"
        ]
    },
    {
        "id": 87842,
        "address": "6572 95th Pl N",
        "unit": "Unit 11L",
        "country": "USA",
        "state": "Florida",
        "city": "Pinellas Park",
        "bed": 3,
        "bath": 3,
        "price": 165515,
        "image_links": [
          "https://ssl.cdn-redfin.com/photo/118/islphoto/375/genIslnoResize.U8233375_0.jpg"
        ]
    },

    
        {
            "id": 2055238536,
            "address": "5689 67th Ave N",
            "unit": "# 5689",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 3,
            "bath": 3,
            "price": 139750,
            "image_links": [
                "https://ssl.cdn-redfin.com/photo/118/islphoto/107/genIslnoResize.U8233107_1.jpg"
            ]
        },
        {
            "id": 340015559,
            "address": "3632 91st Ave N",
            "unit": "# 6",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 2,
            "bath": 2,
            "price": 349900,
            "image_links": [
                "https://ap.rdcpix.com/d5c72e3b203efb3f6bd79f455e6cd9c9l-m4233250299od-w480_h360_x2.webp`"
            ]
        },
        {
            "id": 47122843,
            "address": "9790 66th St N LOT 340",
            "unit": "Lot 340",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 2,
            "bath": 2,
            "price": 129900,
            "image_links": [
                "https://feed-images.rewhosting.com/stellar/_cloud_media/property/residential/mfru8233509-1-6e1584b09ba4dda50b8ad245703adc47-m.jpg"
            ]
        },
        {
            "id": 339970891,
            "address": "6207 64th Way N",
            "unit": "Unit A",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 3,
            "bath": 4,
            "price": 725000,
            "image_links": [
                "https://feed-images.rewhosting.com/stellar/_cloud_media/property/residential/mfro6182772-1-f2dfc4db19ef3304ff021fc036b5cd3e-m.jpg"
            ]
        },
        {
            "id": 47148923,
            "address": "9605 44th St N",
            "unit": "Unit A",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 2,
            "bath": 2,
            "price": 315000,
            "image_links": [
                "https://feed-images.rewhosting.com/stellar/_cloud_media/property/residential/mfrt3500124-1-572103edbd1e5bb8070ad7eaf5868f62-m.jpg"
            ]
        },
        {
            "id": 2054169172,
            "address": "66019 London Rd N",
            "unit": "Unit A",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 2,
            "bath": 2,
            "price": 169999,
            "image_links": [
                "https://feed-images.rewhosting.com/stellar/_cloud_media/property/residential/mfrw7860164-1-2e0a83fc613b5eb24c952c5622c94c30-m.jpg"
            ]
        },
        {
            "id": 2052854932,
            "address": "8482 60th St N",
            "unit": "# 804",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 2,
            "bath": 2,
            "price": 170000,
            "image_links": [
                "https://i.pinimg.com/236x/7d/ab/e6/7dabe6aab5a181f641e7fe87eb3ada9b.jpg"
            ]
        },
        {
            "id": 2098811041,
            "address": "66178 London Rd N",
            "unit": "Unit A",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 2,
            "bath": 2,
            "price": 156999,
            "image_links": [
                "https://photos.zillowstatic.com/fp/83836130a8b1fa6b162ecd5bbfb5a343-p_e.jpg"
            ]
        },
        {
            "id": 47205907,
            "address": "6226 76th Ave N",
            "unit": "Unit A",
            "country": "USA",
            "state": "Florida",
            "city": "Pinellas Park",
            "bed": 3,
            "bath": 3,
            "price": 150000,
            "image_links": [
                "https://feed-images.rewhosting.com/stellar/_cloud_media/property/residential/mfro6174127-1-39acb2dc61c3fc04aa2c29a9f3894b95-m.jpg"
            ]
        },
        {
            "id": 2092297265,
            "address": "3390 Gandy Blvd N",
            "unit": "Lot 153",
            "country": "USA",
            "state": "Florida",
            "city": "St Petersburg",
            "bed": 2,
            "bath": 2,
            "price": 161000,
            "image_links": [
                "https://feed-images.rewhosting.com/stellar/_cloud_media/property/residential/mfru8224804-1-8954e4d24a1a4aa48ecd13db7079335f-m.jpg"
            ]
        }
    ,
    {
        "id": 15,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1501",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=14cc1a2b022ae76abda9153fb2d12a741d5813f2-10389657-images-thumbs&n=13"
    },
    {
        "id": 16,
        "address": "951 Lakeview Pkwy",
        "unit": "Unit 1601",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 140000,
        "image_links": "https://avatars.mds.yandex.net/i?id=c3b6177e10a721b6927a74cf2c47ce874a9818c1-12606366-images-thumbs&n=13"
    },
    {
        "id": 22,
        "address": "714 Thistlewood Dr",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 3,
        "price": 510000,
        "image_links": "https://photos.zillowstatic.com/fp/363849fd66657b0eeb3361390289ac33-p_e.jpg"
    },
    {
        "id": 23,
        "address": "9702 Pelsey St",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 405000,
        "image_links": "https://photos.zillowstatic.com/fp/e878a44011d3c156bff9b6804fdd0486-p_e.jpg"
    },
    {
        "id": 24,
        "address": "2324 Dryden Rd",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 3,
        "price": 1150000,
        "image_links": "https://photos.zillowstatic.com/fp/3f5b222ac4581d870472ac5546e7e365-p_e.jpg"
    },
    {
        "id": 25,
        "address": "6310 Kimball Mill Ln",
        "unit": "# S56W8O",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 3,
        "price": 338900,
        "image_links": "https://maps.googleapis.com/maps/api/staticmap?mobile=false&sensor=true&maptype=satellite&size=575x242&zoom=17&center=29.870180130004883,-95.65099334716797&key=AIzaSyBJsNQO5ZeG-XAbqqWLKwG08fWITSxg33w&signature=MH8o1Fr6JbTmV6SM7xuzWPcZzEQ="
    },
    {
        "id": 26,
        "address": "130 Ben Dr",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 245000,
        "image_links": "https://photos.zillowstatic.com/fp/fc516e60c6786974c96f9c421312c708-p_e.jpg"
    },
    {
        "id": 27,
        "address": "The Huntley (5012) Plan, Riverstone Ranch - The Manor - Estate",
        "unit": "# S56W8O",
        "country": "USA",
        "state": "Texas",
        "city": "Pearland",
        "bed": 4,
        "bath": 4,
        "price": 512990,
        "image_links": "https://photos.zillowstatic.com/fp/38ce1a816411a467d3374a7c1c5dc8c6-p_e.jpg"
    },
    {
        "id": 28,
        "address": "8212-8212 8214 Knox St",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 490000,
        "image_links": "https://photos.zillowstatic.com/fp/13b61eb685dd3692ec3b19606c43b6ad-p_e.jpg"
    },
    {
        "id": 29,
        "address": "15614 Creekhaven Dr",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 2,
        "price": 296900,
        "image_links": "https://photos.zillowstatic.com/fp/19fe4cc6c87010a23a98d7b78fc0cf06-p_e.jpg"
    },
    {
        "id": 31,
        "address": "15038 Wunderlust Ln",
        "unit": "Unit A",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 3,
        "price": 95000,
        "image_links": "https://photos.zillowstatic.com/fp/22f162759cd68d03f3ff149cc335061e-p_e.jpg"
    },
    {
        "id": 17,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1701",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 112000,
        "image_links": "https://avatars.mds.yandex.net/i?id=9968b8ea4d0f2e6903beec42a1d20ddd-4121129-images-thumbs&n=13"
    },
    {
        "id": 18,
        "address": "852 Lakeview Ln",
        "unit": "Unit 1801",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=8982d052c70d397146f1691f1cc50dc349955dc9-10401675-images-thumbs&n=13"
    },
    {
        "id": 19,
        "address": "963 Lakeview Loop",
        "unit": "Apt 1901",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 3,
        "bath": 2,
        "price": 132000,
        "image_links": "https://avatars.mds.yandex.net/i?id=07bed98c6d0c1d1d278a4cc33a28cbd316f8b660-9855155-images-thumbs&n=13"
    },
    {
        "id": 20,
        "address": "741 Lakeview Dr",
        "unit": "Unit 2001",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 123000,
        "image_links": "https://avatars.mds.yandex.net/i?id=0b0fc54a3cd8eea866435eddbac59d5f31975dad-12144750-images-thumbs&n=13"
    },
    {
        "id": 21,
        "address": "963 Lakeview Loop",
        "unit": "Apt 2101",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 1,
        "price": 105000,
        "image_links": "https://avatars.mds.yandex.net/i?id=d07210f5d8652bd29bb3244aadd3dd1a8edbf214-11481522-images-thumbs&n=13"
    },
    {
        "id": 60,
        "address": "1341 Mount Clinton Pike",
        "city": "Harrisonburg",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/de0f31b15e6e6c509a345a89f2304b73-p_e.jpg",
        "bed": 5,
        "bath": 4,
        "price": 499900,
        "unit": "Unit A"
    },
    {
        "id": 61,
        "address": "601 Arizona Dr",
        "city": "Richmond",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/3d6ae36c8a60acd88f980f6f0cf62a01-p_e.jpg",
        "bed": 3,
        "bath": 1,
        "price": 230000,
        "unit": "Unit B"
    },
    {
        "id": 62,
        "address": "1902 Burma Rd",
        "city": "Salem",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/cd1456e6647117ef85b4e67271c3bbc7-p_e.jpg",
        "bed": 2,
        "bath": 1,
        "price": 234950,
        "unit": "Unit C"
    },
    {
        "id": 63,
        "address": "127 Falcon Ln",
        "city": "Weyers Cave",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/cef6361b2913b43f4e9f80fec9b52db8-p_e.jpg",
        "bed": 4,
        "bath": 3,
        "price": 344900,
        "unit": "Unit D"
    },
    {
        "id": 64,
        "address": "43 Olive St",
        "city": "Staunton",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/321dab0e85d1c9df84aabe7088f1870d-p_e.jpg",
        "bed": 3,
        "bath": 1,
        "price": 170000,
        "unit": "Unit E"
    },
    {
        "id": 65,
        "address": "611 Belair Rd",
        "city": "Meadows Of Dan",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/d1be6e2742d2c423491dc6600699fdf8-p_e.jpg",
        "bed": 2,
        "bath": 2,
        "price": 179000,
        "unit": "Unit F"
    },
    {
        "id": 66,
        "address": "1308 Swallow Dr",
        "city": "Virginia Beach",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/e5f3561afda3c551359e1b22bdb19a60-p_e.jpg",
        "bed": 4,
        "bath": 2,
        "price": 288000,
        "unit": "Unit G"
    },
    {
        "id": 67,
        "address": "15434 Bull Church Rd",
        "city": "Woodford",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/7205d97c5c0c2af1ac15c1f7437850e3-p_e.jpg",
        "bed": 3,
        "bath": 1,
        "price": 299800,
        "unit": "Unit H"
    },
    {
        "id": 68,
        "address": "Robertson St",
        "city": "South Hill",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/782a1f26e11ee49fc5d995ac6359408c-p_e.jpg",
        "bed": 1,
        "bath": 1,
        "price": 14900,
        "unit": "Unit I"
    },
    {
        "id": 69,
        "address": "1113 Stoney Brook Lndg",
        "city": "Chesapeake",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/804b25ec8b647ac249b334dccafe63af-p_e.jpg",
        "bed": 3,
        "bath": 2,
        "price": 325000,
        "unit": "Unit J"
    },
    {
        "id": 70,
        "address": "Asheboro Plan, Rocketts Ridge",
        "city": "Sandy Hook",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/ca2761fa204178e0efd65d84f0d3c9c7-p_e.jpg",
        "bed": 3,
        "bath": 3,
        "price": 614990,
        "unit": "# CJDU3S"
    },
    {
        "id": 71,
        "address": "883 Walkers Chapel Ln",
        "city": "Mount Jackson",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/803ab6516f8c9b8d13486a1084080838-p_e.jpg",
        "bed": 3,
        "bath": 1,
        "price": 175000,
        "unit": "Unit L"
    },
    {
        "id": 72,
        "address": "182 Sandy Rd",
        "city": "Gretna",
        "state": "Virginia",
        "country": "USA",
        "image_links": "https://photos.zillowstatic.com/fp/f165a34afb0fb7d6f24058a4948de6b6-p_e.jpg",
        "bed": 1,
        "bath": 2,
        "price": 169000,
        "unit": "Unit M"
    }
    ,
    {
        "id": 71814795,
        "address": "250 Park Ave",
        "unit": "Unit 509",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 128900,
        "image_links": ["https://photos.zillowstatic.com/fp/0359969bc74c5d312ea6d8f9ad375d2a-p_e.jpg"]
    },
    {
        "id": 38,
        "address": "3403 Daphne St",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 4,
        "price": 384999,
        "image_links": [
            "https://photos.zillowstatic.com/fp/caa71e937c1f5e6de1f82ed1806f2e9f-p_e.jpg"
        ],
        "unit": "# B"
    },
    {
        "id": 39,
        "address": "9539 W Airport Blvd",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 318000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/8d60fd52dc3524faac0b96f1b7e0b11c-p_e.jpg"
        ],
        "unit": "Unit F"
    },
    {
        "id": 1783173,
        "address": "4335 4th Ave S",
        "unit": "Unit 1",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 5,
        "bath": 2,
        "price": 122900,
        "image_links": ["https://photos.zillowstatic.com/fp/2594dbd2ac82e61e2a0057da3734ecef-p_e.jpg"]
    },
    {
        "id": 71814595,
        "address": "401 1st St S",
        "unit": "# 412",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 1,
        "bath": 1,
        "price": 115500,
        "image_links": ["https://photos.zillowstatic.com/fp/41117999a7ec49c14dd4deefa956ca1c-p_e.jpg"]
    },
    {
        "id": 2059516263,
        "address": "20 2nd St NE",
        "unit": "Unit P403",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 0,
        "bath": 1,
        "price": 149900,
        "image_links": ["https://photos.zillowstatic.com/fp/747185738ee13ee945ca2f618538e2f7-p_e.jpg"]
    },
    {
        "id": 1927722,
        "address": "1920 1st St S",
        "unit": "# 206",
        "country": "USA",
        "state": "Minnesota",
        "city": "Minneapolis",
        "bed": 2,
        "bath": 2,
        "price": 170000,
        "image_links": ["https://photos.zillowstatic.com/fp/edb504e555fba5e5d177c38b600bbb8c-p_e.jpg"]
    },
    {
        "id": 32,
        "address": "13803 Overbrook Ln",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 2,
        "price": 125000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/6d892e9bd38c55e1ca113ecef068c567-p_e.jpg"
        ],
        "unit": "Unit A"
    },
    {
        "id": 33,
        "address": "310 Jensen Dr",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 4,
        "price": 589990,
        "image_links": [
            "https://photos.zillowstatic.com/fp/662ed0793e9162a48e3ed6fb2f65428d-p_e.jpg"
        ],
        "unit": "Unit B"
    },
    {
        "id": 34,
        "address": "6640 Lovers Ln",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 0,
        "bath": 0,
        "price": 110000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/e37f3087cec95e99aa268f32c9c22e97-p_e.jpg"
        ],
        "unit": "Unit C"
    },
    {
        "id": 35,
        "address": "7510 Shadyvilla Ln",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 2,
        "bath": 1,
        "price": 140000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/eec5042a7a219c5557bcb641db8ea36b-p_e.jpg"
        ],
        "unit": "Unit D"
    },
    {
        "id": 36,
        "address": "6238 Paisley St",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 3,
        "bath": 2,
        "price": 550000,
        "image_links": [
            "https://photos.zillowstatic.com/fp/d3888503df36baa45e0fb4bb8fbee032-p_e.jpg"
        ],
        "unit": "Apt. 101"
    },
    {
        "id": 37,
        "address": "15403 Palton Springs Dr",
        "country": "USA",
        "state": "Texas",
        "city": "Houston",
        "bed": 4,
        "bath": 2,
        "price": 339400,
        "image_links": [
            "https://photos.zillowstatic.com/fp/6ae0bfc864d0a0dfe8383bc9c65614b4-p_e.jpg"
        ],
        "unit": "Unit E"
    },
    {
        "id": 38,
        "address": "1914 Boston Ave",
        "country": "USA",
        "state": "Virginia",
        "city": "Richmond",
        "unit": "Unit 1",
        "bed": 3,
        "bath": 2,
        "price": 299900,
        "image_links": "https://photos.zillowstatic.com/fp/d2ba2eeb8fbe27c8f066cdf4ad51b404-p_e.jpg"
      },
      {
        "id": 39,
        "address": "182 Shore Dr",
        "country": "USA",
        "state": "Virginia",
        "city": "Boydton",
        "unit": "Unit 2",
        "bed": 3,
        "bath": 2,
        "price": 511000,
        "image_links": "https://photos.zillowstatic.com/fp/5ec592c9a4a93fd7ff0f2c3baa8793ce-p_e.jpg"
      },
      {
        "id": 40,
        "address": "LOT 11 Jennifer Ln",
        "country": "USA",
        "state": "Virginia",
        "city": "Cape Charles",
        "unit": "Unit 3",
        "bed": null,
        "bath": null,
        "price": 25000,
        "image_links": "https://photos.zillowstatic.com/fp/05013bd41831c112304948d8bde6e442-p_e.jpg"
      },
      {
        "id": 41,
        "address": "23 Shore Dr",
        "country": "USA",
        "state": "Virginia",
        "city": "Boydton",
        "unit": "Unit 4",
        "bed": null,
        "bath": null,
        "price": 220000,
        "image_links": "https://photos.zillowstatic.com/fp/b7d61ba7ff21d974fa40904e2018888d-p_e.jpg"
      },
      {
        "id": 42,
        "address": "1109 Springhill Rd",
        "country": "USA",
        "state": "Virginia",
        "city": "Staunton",
        "unit": "Unit 5",
        "bed": 2,
        "bath": 2,
        "price": 250000,
        "image_links": "https://photos.zillowstatic.com/fp/8dc562962c6a1bba66f7ce22d3c1f7f7-p_e.jpg"
      },
      {
        "id": 43,
        "address": "23 Ireland St",
        "country": "USA",
        "state": "Virginia",
        "city": "Hampton",
        "unit": "Unit 6",
        "bed": 4,
        "bath": 3,
        "price": 429000,
        "image_links": "https://photos.zillowstatic.com/fp/9dbb920a434e32fd967643bf7d86c56c-p_e.jpg"
      },
      {
        "id": 44,
        "address": "238 Misty Point Ln",
        "country": "USA",
        "state": "Virginia",
        "city": "Newport News",
        "unit": "Unit 7",
        "bed": 2,
        "bath": 2,
        "price": 218000,
        "image_links": "https://photos.zillowstatic.com/fp/6ddac49a71eeea02b9be6fe1a8218dc8-p_e.jpg"
      },
      {
        "id": 45,
        "address": "305 Bridgewater Dr",
        "country": "USA",
        "state": "Virginia",
        "city": "Newport News",
        "unit": "Unit 8",
        "bed": 3,
        "bath": 3,
        "price": 225000,
        "image_links": "https://photos.zillowstatic.com/fp/cc249566f4a9242a2b89c42deca3703a-p_e.jpg"
      }
];

const houses = [...new Set(properties.map((item) => { return item }))];

let searchbar = document.getElementById("search").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = houses.filter((item) => {
        return item.state.toLowerCase().includes(searchData) || item.city.toLocaleLowerCase().includes(searchData);
    });

    displayItem(filterData);
})


// filter Buttons
const allBtn = document.querySelector(".all")
const texasBtn = document.querySelector(".texas")
const minnesotaBtn = document.querySelector(".minnesota")
const virginiaBtn = document.querySelector(".virginia")
const pinellasBtn = document.querySelector(".pinellas")

allBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = '';
    displayItem(houses);
});

texasBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = 'Texas';
    filterData = houses.filter(item => item.state.includes('Texas'));
    displayItem(filterData);
});

minnesotaBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = 'Minnesota';
    filterData = houses.filter(item => item.state.includes('Minnesota'));
    displayItem(filterData);
});

virginiaBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = 'Virginia';
    filterData = houses.filter(item => item.state.includes('Virginia'));
    displayItem(filterData);
});

pinellasBtn.addEventListener('click', () => {
    let searchBar = document.getElementById("search");
    searchBar.value = 'Florida';
    filterData = houses.filter(item => item.city.includes('Pinellas'));
    displayItem(filterData);
});


const f = new Intl.NumberFormat("en-US")


const displayItem = (items) => {
    const houseContainer = document.querySelector(".propertyContainer");

    if (items.length === 0) {
        houseContainer.innerHTML = "<p class='error'>Oops...property not found!</p>";
    } else {
        houseContainer.innerHTML = items.map((item) => {
            var { image_links, address, unit, country, state, city, price, bed, bath } = item;

            return (
                `
                <div class="property" data-aos="zoom-in" onclick="view(${item.id})">
            <img src="${image_links}" alt="${unit}">
            <div class="property-details">
                <h3 class="unit">${unit}</h3>
                <div class="flex">
                    <span class="material-symbols-rounded">
                        home_pin
                        </span>
                    <p class="address">${address}</p>
                </div>
                <div class="flex">
                    <span class="material-symbols-rounded">
                        home
                        </span>
                        <p><span class="country">${country}</span>, <span class="state">${state}</span>, <span class="city">${city}</span></p>
                </div>
                <div class="flex">
                    <span class="material-symbols-rounded">
                        sell
                        </span>
                    <p class="price">$${f.format(price)}</p>
                </div>
                <div class="amenities">
                    <div class="flex">
                        <span class="material-symbols-rounded">
                            bed
                            </span>
                        <p>Bed <span class="bed">${bed}</span></p>
                    </div>
                    <div class="flex">
                        <span class="material-symbols-rounded">
                            bathtub
                            </span>
                        <p>Bath <span class="bath">${bath}</span></p>
                    </div>
                </div>
            </div>
            <span class="status">For sale</span>
        </div>
        `
            );
        }).join('');
    }
};


function view(itemId) {
    // Retrieve the selected product based on the itemId
    const selectedProperty = properties.find(property => property.id === itemId);

    // Save the selected product to local storage
    localStorage.setItem("selectedProperty", JSON.stringify(selectedProperty));

    window.location.href = "../view_property.html";
}

displayItem(houses);
