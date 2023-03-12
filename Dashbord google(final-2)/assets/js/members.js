const fullnames = ['Meriem fraj', 'Ghdamsi Nedra', 'Abdelkader Louay', 'Akkari Eya', 'Chayrrou Mariem', 'Guizani Sabrine', 'Alaimi Sarra', 'Ben Tanfouss Ghait', 'Taissir bouzidi', 'wassim rached', 'Lakhoua ghofrane', 'Guizani Adem', 'zahar cyrine', 'Aloui Oussema', 'Youssef Ben Salah', 'Abderrahmen talbi', 'Louay Tarchoun', 'Cyrine Srairi', 'Salma rouissi', 'Abdelatif bouchaala', 'Taleb Mouelhi', 'abdellaoui eya', 'Riahi Mohamed Yassin', 'Attouni Anis', 'Mohamed Ben Lagha', 'Mohamed Achref Ben Fraj', 'Chaïbi Imene', 'yorna salouej', 'mouhamed aziz ben mimoun', 'Mohamed Aziz channoufi', 'yosr amamou', 'Youssef Benfarah', 'Yasmine Ben Abdallah', 'Wejdene Bouali', 'khadija chaar', 'Tesnim Dhouib', 'Shu Shaimae', 'Med Amine JaBou', 'Massoudyy Fatma', 'Haroun Chaabane', 'Hamza Mabrouk', 'Eya hwess', 'Molka Agrebi', 'Chedy Kordi', 'Mortadha Khemiri', 'bayrem ben ammar']
const cin = ['14327380', '14501367', '10029136', '13031764', 'MA210002', '9529934', '-', '9530831', '-', '-', '10029319', '13630175', '-', '10025767', '-', '21238537*', '-', '10024850', '14524225', '14524582', '11673589', '11676542', '-', '14776330', '-', '-', '-', '14523923', '13033805', '-', '14526187', '-', '14527031', '-', '15027114', '-', '-', '14669383', '-', '-', '14521587', '11180366', '*', '*', '*', '*']
const phone = ['25153620', '51405691', '22795484', '25174801', '27578638', '26906866', '53407656', '93772387', '95514521', '26262688', '29318478', '20662665', '56330421', '54396453', '53357475', '21238537', '27445695', '50077967', '95382342', '27979083', '52202320', '23368880', '92844412', '27803619', '55107658', '27181812', '55119810', '25787165', '54380583', '-', '26321501', '-', '56888364', '-', '-', '99990418', '-', '52251488', '27452032', '98309291', '54880175', '53749671', '*', '*', '*', '*']
const birthday = ['06/09/1999', '12/12/2001', '03/09/2003', '11/04/0202', '28/10/2001', '30/11/2001', '22/05/2002', '02/04/2002', '07/12/2003', '01/01/1999', '13/06/2003', '02/ 08 /1998', '18/08/2003', '07/09/2001', '05/12/2003', '15/02/1998', '06/03/2002', '27/05/2001', '29/01/2004', '19/12/2003', '05/09/2003', '28/07/2003', '*', '17/04/2003	', '15/02/2004', '-', '17/10/2002', '02/05/2003', '12/10/2003', '17/12/2003', '29/11/2003', '17/02/2003', '15/06/2003', '26/07/2003', '01/07/2003', '15/10/2003', '18/01/2003', '30/06/2003', '14/07/2003', '31/10/2003', '01/07/2003', '-', '*', '*', '*', '*']
const departement = ['Présidente', 'dev', 'dev', 'web/dev', 'RH', 'membre ancien', 'RH', 'VP dev', 'media', 'dev', 'RH', 'medai/membre ancien', 'dev', 'VP media', 'dev', 'dev', 'dev', 'Vice Présidente', 'RH/media', '*', 'Media/Dev', 'Dev', 'Dev', 'Media/Dev ', '*', 'Media/Dev ', 'Media/Dev', 'Dev', 'Dev', 'Media', 'Media/Dev', 'Media', 'RH/Media', 'Media/Dev', 'Media/Dev', 'Media', 'Media', 'Dev', 'Dev', 'Media', 'Media', 'Dev', '*', '*', '*', '*']
const mail = ['Frejmeriem99@gmail.com', 'nedraghdamsi4@gmail.com', 'louuayyabdelkaderr@gmail.com', 'akkeriaya345@gmail.com', 'chayyrou.mariem@gmail.com', 'sabrineguizani4@gmail.com', 'saraalaimi2@gmail.com', 'gbtanfous@gmail.com', 'Taysirbouzidi123@gmail.com', 'wassimrached404@gmail.com', 'Ghoflovely@gmail.com', 'adguilou@gmail.com', 'cyrine.zahaar@gmail.com', 'alouioussema697@gmail.com', 'Jozeeph69@gmail.com', 'abderrahmentalby@gmail.com', 'louaytrc@gmail.com', 'sirine.srairi10@gmail.com', 'salmarouissi1@gmail.com', 'latifagar4@gmail.com', 'tbfeeber@gmail.com', 'abdellaeya@gmail.com', 'riahiyassintl101@gmail.comkha', 'anislovem@gmail.com', 'Lagha857@gmail.com', '*', 'chaibimene02@gmail.com', 'salouejyorna@gmail.com', 'aziz2003benmimoun@gmail.com', '*', 'Yosr.amamou@yahoo.com', '*', 'yasmine.benabdallah25@gmail.com', 'wejdenebouali.wb@gmail.com', 'khadijachaar@protonmail.com', 'Tesnimdhouib03@gmail.com', '*', 'jabou.medamine@gmail.com', 'massoudyyfatma840@gmail.com', 'Harounchaabane56@gmail.com', '*', 'eyahwess74@gmail.com', '*', '*', '*', '*']
const links = []
function card(x) {
    var person = {
        name: fullnames[x],
        cin: cin[x],
        phone: phone[x],
        birthday: birthday[x],
        departement: departement[x],
        mail: mail[x],
        link: links[x]
    }
    document.getElementById('name').innerHTML = person.name;
    document.getElementById('cin').innerHTML = person.cin;
    document.getElementById('phonenbr').innerHTML = person.phone;
    document.getElementById('birthday').innerHTML = person.birthday;
    document.getElementById('dep').innerHTML = person.departement;
    document.getElementById('mail').innerHTML = person.mail;
    document.getElementById('link').innerHTML = person.link;
}
function departementfinder(dep) {
    for (let i in departement) {
        if (dep == departement[i]) {
            console.log(fullnames[i]);
        }
    }
}