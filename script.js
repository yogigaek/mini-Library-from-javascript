// DOM H1
const h1 = document.createElement(`h1`);
document.getElementById(`h1`).appendChild(h1);
h1.innerHTML = `Membuat mini library From javascript`;
h1.style.textAlign = `center`; h1.style.fontFamily = `fantasy`;

// DOM button
const button = document.createElement(`button`);
document.querySelector(`#button`).appendChild(button);
button.innerHTML = `Klik untuk menampilkan table`;
button.style.display = `inline-Block`; button.style.padding = `10px 20px`; 
button.style.position = `absolute`; button.style.top = `10%`; button.style.left= `42%`;

// Use class dan method
class Gaek {
    constructor (head, head1, head2, dataBody){
        this.headx      = head;
        this.head1x     = head1;
        this.head2x     = head2;
        this.dataBodyx  = dataBody;
        this.thead = document.createElement(`thead`);
        this.tbody = document.createElement(`tbody`);
        this.row = document.createElement(`tr`);
        this.row1 = document.createElement(`tr`);
    }
    table(){
        let myTable = document.createElement(`table`);
        let myThead = this.thead;
        let myTbody = this.tbody;
        let myRow   = this.row;
        let myRow1  = this.row1;

        document.querySelector(`#table`).appendChild(myTable);

        myTable.setAttribute(`class`, `table table-bordered border-dark`);
        
        myTable.style.position = `absolute`; myTable.style.left = `30%`; myTable.style.top = `20%`; myTable.style.width = `40%`;
        myTable.appendChild(myThead);
        myThead.appendChild(myRow);
        myThead.appendChild(myRow1);
        myTable.appendChild(myTbody);
    };
    header(){
        const th = this.headx.head
        th.forEach(text => {
            let headBulan = document.createElement(`th`);
            headBulan.setAttribute(`rowspan`, `2`);
            headBulan.style.backgroundColor = `yellow`;
            headBulan.style.textAlign = `center`
            // headBulan.setAttribute(`class`, `table-warning `);

            let textNode = document.createTextNode(text)
            headBulan.appendChild(textNode);
            this.row.appendChild(headBulan);
        });
    }
    header1(){
        const th1 = this.headx.head1;
        th1.forEach(text1 => {
            let headHasilpanen = document.createElement(`th`);
            headHasilpanen.setAttribute(`colspan`, `3`);
            headHasilpanen.style.backgroundColor = `green`;
            headHasilpanen.style.textAlign = `center`
            // headHasilpanen.setAttribute(`class`, `table-info`);

            let textNode1 = document.createTextNode(text1);
            headHasilpanen.appendChild(textNode1);
            this.row.appendChild(headHasilpanen);
        })
    }
    header2(){
        const th2 = this.headx.head2;
        th2.forEach(text2 => {
            let headPadi = document.createElement(`th`);
            headPadi.style.textAlign = `center`

            let texNode2 = document.createTextNode(text2);
            headPadi.appendChild(texNode2);
            this.row1.appendChild(headPadi);
        })
    }
    data(){
        const dataB = this.headx.dataBody;
        dataB.forEach(textBody => {
            let dataBody = `<tr> 
            <td>${textBody[0]}</td>
            <td>${textBody[1]}</td>
            <td>${textBody[2]}</td>
            <td>${textBody[3]}</td>
            </tr>`;
            this.tbody.innerHTML += dataBody;
        })
    }
};

// use addevent
button.addEventListener(`click`, function() {
        gaek.table();
        gaek.header();
        gaek.header1();
        gaek.header2();
        gaek.data();
})

const gaek = new Gaek({
    head: [`Bulan`],
    head1: [`Hasil panen`],
    head2: [`Padi`, `Kacang`, `Jagung`],
    dataBody: [
        [`Januari`, `500 Kg`, `300 Kg`, `600 Kg`],
        [`Februari`, `450 Kg`, `300 Kg`, `600 Kg`],
        [`Maret`, `670 Kg`, `300 Kg`, `600 Kg`],
        [`April`, `340 Kg`, `300 Kg`, `600 Kg`],
        [`Mei`, `900 Kg`, `300 Kg`, `600 Kg`],
        [`Juni`, `234 Kg`, `300 Kg`, `600 Kg`],
        [`Juli`, `220 Kg`, `300 Kg`, `600 Kg`],
        [`Agustus`, `452 Kg`, `300 Kg`, `600 Kg`],
        [`September`, `092 Kg`, `300 Kg`, `600 Kg`],
        [`Oktober`, `345 Kg`, `300 Kg`, `600 Kg`],
        [`November`, `218 Kg`, `300 Kg`, `600 Kg`],
        [`Desember`, `345 Kg`, `300 Kg`, `600 Kg`]
    ]
});