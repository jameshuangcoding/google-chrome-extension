console.log('HELLLOOO')

window.onload = function() {
    console.log('SHITS FUCKING LOADED')
    let classes = document.querySelector('.p-r_member_profile__avatar__img')
    let alt = classes.alt
    
    const ppl = {
        "Profile photo for Aaron Cruz" : 'https://ddgimgs-f43e.kxcdn.com/2896125/lqusgd_75bbae67fdaeb4187a2c27572a7de144d186d3fc.jpg',
        "Profile photo for Aliya Salmanova" : 'https://ddgimgs-f43e.kxcdn.com/2896158/7mtds5_92848d087c4f8b2c3b8f600d9cc586e29e88d3a2.jpg',
        "Profile photo for Brian Yang" : 'https://ddgimgs-f43e.kxcdn.com/2896171/aebcnb_5a21bf7a7d2fc5b8c4311ff916c471f8f3a75ba6.jpg',
        "Profile photo for Brooke Sauro" : 'https://ddgimgs-f43e.kxcdn.com/2896138/zzygmb_d535790560c3e0a0fe5b9a01cb716b4ed0eb3965.jpg',
        "Profile photo for Charlie Woodlief" : 'https://ddgimgs-f43e.kxcdn.com/2896125/qeiu9j_d78d0b7d708e68586a1737ecbbf387dfd01de69f.jpg',
        "Profile photo for Chris Wardrip" : 'https://ddgimgs-f43e.kxcdn.com/2896171/hiev7h_2c285e61ab792160a1922374c7fd127c253e7649.jpg',
        "Profile photo for Christopher Jettoo" : 'https://ddgimgs-f43e.kxcdn.com/2896091/yhbbmi_5fd8c55f1d164afec0a3b0baf38ebb635435eb4e.jpg',
        "Profile photo for Claudia Franke" : 'https://ddgimgs-f43e.kxcdn.com/2896091/51onib_d6b068c287192ffd9f05d8dd88607e109ff98fef.jpg',
        "Profile photo for Cristina Flores" : 'https://ddgimgs-f43e.kxcdn.com/2896125/zwg1m4_47d402de93afc2c3ad4740b3606e581ea6a4c452.jpg',
        "Profile photo for Edmund Wong" : 'https://ddgimgs-f43e.kxcdn.com/2896124/2vmncn_aca872813045a7b33e83bb6b3313b8d7ddf050a9.jpg',
        "Profile photo for Heidi Kim" : 'https://ddgimgs-f43e.kxcdn.com/2896125/prr2x8_ec0e14c522d7fba9a1be130d64c43deb500042e7.jpg',
        "Profile photo for Herman Chen" : 'https://ddgimgs-f43e.kxcdn.com/2896091/hiazfl_2de4435050615a2de22bc4f64be8425d5f1aa989.jpg',
        "Profile photo for Jake Bayar" : 'https://ddgimgs-f43e.kxcdn.com/2896124/zvv6jc_e3d19dfa2c74d7b524c95e3c5b222fe581adf1f2.jpg',
        "Profile photo for James Huang" : 'https://ddgimgs-f43e.kxcdn.com/2896124/hm6jhi_6a156371784504a582626e388496ffcfe93735fe.jpg',
        "Profile photo for Jeff Levin" : 'https://ddgimgs-f43e.kxcdn.com/2896091/hiiyng_a1ab08acf57b5b7388e7d98226fd34aec1c3953f.jpg',
        "Profile photo for Jeff Chan" : 'https://ddgimgs-f43e.kxcdn.com/2896138/p4bqy6_68c292f4bd6c8ba6e84e708fdc18b6efaa8c9aef.jpg',
        "Profile photo for Jenny Oh" : 'https://ddgimgs-f43e.kxcdn.com/2896091/wjq8ui_f8d6909159d82dcca212f4298b96fec43a39b24a.jpg',
        "Profile photo for Jordan Lim" : 'https://ddgimgs-f43e.kxcdn.com/2896091/vdwnt3_515336e0d0a9b0d29fb79ee3bc767271a26876a1.jpg',
        "Profile photo for Katya Villano (they/them)" : 'https://ddgimgs-f43e.kxcdn.com/2896091/ink2sb_be8c36303475133613ea450ad1759a09b9cbecbb.jpg',
        "Profile photo for Larissa Ciancarelli" : 'https://ddgimgs-f43e.kxcdn.com/2896091/cobbxr_e9575a5c84da33ca55fd11b684846dcc597412e2.jpg',
        "Profile photo for Laura Ramirez" : 'https://ddgimgs-f43e.kxcdn.com/2896138/rdxzqp_4f4806a90399ef02326186c4488fb29b8b48ceea.jpg',
        "Profile photo for Luisa Salazar" : 'https://ddgimgs-f43e.kxcdn.com/2896171/zqgbye_057be6732220cb6507046a848cff9f99870fe6da.jpg',
        "Profile photo for Rita Bizhan" : 'https://ddgimgs-f43e.kxcdn.com/2896134/r1pmao_154bab4cf6afbc8bb76cfadf29a2ce6991eb1ea2.jpg',
        "Profile photo for Mateo Lopez-Castillo" : 'https://ddgimgs-f43e.kxcdn.com/2896091/hqqfag_3f2e9532295445fab6ff35e1f67bb5a51673b2af.jpg',
        "Profile photo for Meg Schneider" : 'https://ddgimgs-f43e.kxcdn.com/2896091/uozlzy_5e94234ae58d6a481f049098a63e506d7882f870.jpg',
        "Profile photo for Mike Masatsugu" : 'https://ddgimgs-f43e.kxcdn.com/2896091/zfclex_de92c557c7415bf1094419cff1c9d9f452736473.jpg',
        "Profile photo for Miri" : "https://ddgimgs-f43e.kxcdn.com/2896134/wrvryy_e55187bcf964d104ad10a42e79035e1008bb49dd.jpg",
        "Profile photo for Nassim Bahet" : 'https://ddgimgs-f43e.kxcdn.com/2896134/rmfmv0_d78c678f3d655fc30a652d46cf12e8672a689744.jpg',
        "Profile photo for Pravek Karwe" : 'https://ddgimgs-f43e.kxcdn.com/2896134/vxvxok_98690b25ff3531a512b4a94b69a18b5f8fcb9717.jpg',
        "Profile photo for Robert Mayo" : 'https://ddgimgs-f43e.kxcdn.com/2896158/tafxuw_38e6fee23fd12fed9c6e415638b01d54669bfbec.jpg',
        "Profile photo for Sky Weiner" : 'https://ddgimgs-f43e.kxcdn.com/2896158/akpgco_8607abfbe55129e0664be01cd7339b1f8a399daa.jpg',
        "Profile photo for Sohum Dalal" : 'https://ddgimgs-f43e.kxcdn.com/2896124/7o2myd_f9fd9293ed48dcc03cfe56c29e279ef13bb5ca47.jpg',
        "Profile photo for Tarik Bensalem" : 'https://ddgimgs-f43e.kxcdn.com/2896138/9bmu55_7477beb9cc82240a7421c4ce0023db0801ee582a.jpg',
        "Profile photo for Tommy Hales" : 'https://ddgimgs-f43e.kxcdn.com/2896091/bnwtuz_5cfc17eb994405ebe6804e60c1b4561d6cfed7ce.jpg',
        "Profile photo for Wayland Singh" : 'https://ddgimgs-f43e.kxcdn.com/2896158/4e8qdq_b8b247e0c2c8227bc5bbf0b3bab04b6ce095ae62.jpg'
    }
    
    nameMatch = function(str1) {
        console.log('DSAFSAEFEAFASDFSADFSDAFSADFWEAFESAFSADEFSDAFSAEFSAEFAS')
        if (str1 in ppl) {
            classes.src = ppl[str1]
        }
    }
    
    if (document.readyState !== 'loading') {
        console.log('WE ARE NOT LOADING')
        nameMatch(alt);
    }

    setInterval(() => {
        console.log('INTERVAL')
        classes = document.querySelector('.p-r_member_profile__avatar__img')
        alt = classes.alt
        nameMatch(alt);
    }, 1000)

    console.log('THE END OF OUR CODE')

}