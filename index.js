const kan10= document.getElementById('sslck')
const eng10= document.getElementById('sslce')
const oth10= document.getElementById('sslco')
const science10= document.getElementById('sslcs')
const maths10= document.getElementById('sslcm')
const sst10= document.getElementById('sslcss')
const next= document.getElementById('next')
const next2= document.getElementById('next2')
const done= document.getElementById('done')
const table= document.getElementById('table')
const div1= document.getElementById('div1')
const div2= document.getElementById('div2')
const div0= document.getElementById('div0')
div0.style.display='block'
div1.style.display='none'
div2.style.display='none'

const kan11= document.getElementById('puck')
const eng11= document.getElementById('puce')
const phy11= document.getElementById('pucp')
const chem11= document.getElementById('pucch')
const math11= document.getElementById('pucm')
const bio11= document.getElementById('pucb')

const kan12= document.getElementById('pucck')
const eng12= document.getElementById('pucce')
const phy12= document.getElementById('puccp')
const chem12= document.getElementById('pucc')
const math12= document.getElementById('puccm')
const bio12= document.getElementById('puccb')

const kant10= document.getElementById("markk10")
const kant11= document.getElementById("markk11")
const kansum = document.getElementById("sumk")
const kant12= document.getElementById("markk12")
const kang= document.getElementById("markkg")
const kantt= document.getElementById('totalk')

const engt10= document.getElementById("marke10")
const engt11= document.getElementById("marke11")
const engsum= document.getElementById("sume")
const engt12= document.getElementById("marke12")
const engtg= document.getElementById("markeg")
const engtt= document.getElementById("totale")

const phyt10= document.getElementById("markp10")
const phyt11= document.getElementById("markp11")
const physum= document.getElementById("sump")
const phyt12= document.getElementById("markp12")
const phyg= document.getElementById("markpg")
const phytt= document.getElementById("totalp")

const chemt10= document.getElementById("markc10")
const chemt11= document.getElementById("markc11")
const chemsum= document.getElementById("sumc")
const chemt12= document.getElementById("markc12")
const chemg= document.getElementById("markcg")
const chemtt= document.getElementById("totalc")

const matht10= document.getElementById('markm10')
const matht11= document.getElementById('markm11')
const mathsum= document.getElementById('summ')
const matht12= document.getElementById('markm12')
const mathg= document.getElementById('markmg')
const mathtt= document.getElementById('totalm')

const boit10= document.getElementById('markb10')
const biot11= document.getElementById('markb11')
const biosum= document.getElementById('sumb')
const biot12= document.getElementById('markb12')
const biog= document.getElementById('markbg')
const biott= document.getElementById('totalb')

const totalt10= document.getElementById('markt10')
const totalt11= document.getElementById('markt11')
const total1012= document.getElementById('sumt')
const totalt12= document.getElementById('markt12')
const totalg= document.getElementById('marktg')
const final= document.getElementById('totatk')

const finalpercentage= document.getElementById('percentagetotal')

next.onclick=()=>{
    div0.style.display='none'
    div1.style.display="block"
    var kan = kan10.value*100*0.008
    var engn=Number(eng10.value)
    var oth=Number(oth10.value)
    var science=Number(science10.value)
    var maths= Number(maths10.value)
    var sst=Number(sst10.value)

    var summain= science+maths+sst
    var avgmain= summain*0.334
    var percentagemain= (avgmain*45)*0.01
     if(kan>=engn && engn>=oth ){
         var sum=(engn+kan)
         var avg= sum*0.5
         var percentagelan = (avg*45)*0.01
         kant10.innerHTML=parseFloat(percentagelan).toFixed(0)
            engt10.innerHTML=parseFloat(percentagelan).toFixed(0)
            phyt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       chemt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       matht10.innerHTML=parseFloat(percentagemain).toFixed(0)
       boit10.innerHTML=parseFloat(percentagemain).toFixed(0)
       var totalfirst=percentagemain*4+(percentagelan*2)
       totalt10.innerHTML=parseFloat(totalfirst).toFixed(0)
        }
        else if(engn>=kan && oth>=kan){
            var avg=(engn+oth)*0.5
            var percentagelan = (avg*45)*0.01
            kant10.innerHTML=parseFloat(percentagelan).toFixed(0)
            engt10.innerHTML=parseFloat(percentagelan).toFixed(0)
            phyt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       chemt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       matht10.innerHTML=parseFloat(percentagemain).toFixed(0)
       boit10.innerHTML=parseFloat(percentagemain).toFixed(0)
       var totalfirst=percentagemain*4+(percentagelan*2)
       totalt10.innerHTML=parseFloat(totalfirst).toFixed(0)
        }
        else if (oth>=engn && kan>=engn ){
            var avg=(oth+kan)*0.5
            var percentagelan =( avg*45)*0.01
            kant10.innerHTML=parseFloat(percentagelan).toFixed(0)
            engt10.innerHTML=parseFloat(percentagelan).toFixed(0)
            phyt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       chemt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       matht10.innerHTML=parseFloat(percentagemain).toFixed(0)
       boit10.innerHTML=parseFloat(percentagemain).toFixed(0)
       var totalfirst=percentagemain*4+(percentagelan*2)
       totalt10.innerHTML=parseFloat(totalfirst).toFixed(0)
        }
        else if (kan<engn && engn>oth){
            var avg=(engn+kan)*0.5
            var percentagelan= (avg*45)*0.01
            kant10.innerHTML=parseFloat(percentagelan).toFixed(0)
            engt10.innerHTML=parseFloat(percentagelan).toFixed(0)
            phyt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       chemt10.innerHTML=parseFloat(percentagemain).toFixed(0)
       matht10.innerHTML=parseFloat(percentagemain).toFixed(0)
       boit10.innerHTML=parseFloat(percentagemain).toFixed(0)
       var totalfirst=percentagemain*4+(percentagelan*2)
       totalt10.innerHTML=parseFloat(totalfirst).toFixed(0)
        }
        next2.onclick=()=>{
            div1.style.display='none'
            div2.style.display="block"
            var kann=Number(kan11.value)
            var engg=Number(eng11.value)
            var phy=Number(phy11.value)
            var chem=Number(chem11.value)
            var mat=Number(math11.value)
            var bio=Number(bio11.value)
    
            var perk= (kann*45)*0.01
            var pere=(engg*45)*0.01
            var perp=(phy*45)*0.01
            var perc=(chem*45)*0.01
            var perm=(mat*45)*0.01
            var perb=(bio*45)*0.01
            var sum11c=perk+pere+perp+perc+perm+perb
            
    
            kant11.innerHTML=parseFloat(perk).toFixed(0)
            engt11.innerHTML=parseFloat(pere).toFixed(0)
            phyt11.innerHTML=parseFloat(perp).toFixed(0)
            chemt11.innerHTML=parseFloat(perc).toFixed(0)
            matht11.innerHTML=parseFloat(perm).toFixed(0)
            biot11.innerHTML=parseFloat(perb).toFixed(0)
            totalt11.innerHTML=parseFloat(sum11c).toFixed(0)

            kansum.innerHTML=parseFloat(percentagelan+perk).toFixed(0)
            engsum.innerHTML=parseFloat(percentagelan+pere).toFixed(0)
            physum.innerHTML=parseFloat(percentagemain+perp).toFixed(0)
            chemsum.innerHTML=parseFloat(percentagemain+perc).toFixed(0)
            mathsum.innerHTML=parseFloat(percentagemain+perm).toFixed(0)
            biosum.innerHTML=parseFloat(percentagemain+perb).toFixed(0)
            var totalsecond=percentagemain*4+(percentagelan*2)+sum11c
            total1012.innerHTML=parseFloat(totalsecond).toFixed(0)
            done.onclick=()=>{
                table.style.display="block"
                var kann12=Number(kan12.value)
                var enggg12=Number(eng12.value)
                var phhy12=Number(phy12.value)
                var chhem12=Number(chem12.value)
                var maath12=Number(math12.value)
                var bioo12=Number(bio12.value)

                
                var totalthird=kann12+enggg12+phhy12+chhem12+maath12+bioo12
                totalt12.innerHTML=parseFloat(totalthird).toFixed(0)
                kant12.innerHTML=parseFloat(kann12).toFixed(0)
                engt12.innerHTML=parseFloat(enggg12).toFixed(0)
                phyt12.innerHTML=parseFloat(phhy12).toFixed(0)
                chemt12.innerHTML=parseFloat(chhem12).toFixed(0)
                matht12.innerHTML=parseFloat(maath12).toFixed(0)
                biot12.innerHTML=parseFloat(bioo12).toFixed(0)

                var gk= (kann*5)*0.01
            var ge=(engg*5)*0.01
            var gp=(phy*5)*0.01
            var gc=(chem*5)*0.01
            var gm=(mat*5)*0.01
            var gb=(bio*5)*0.01
            var sumgg=gk+ge+gp+gc+gm+gb
            
            kang.innerHTML=parseFloat(gk).toFixed(0)
            engtg.innerHTML=parseFloat(ge).toFixed(0)
            phyg.innerHTML=parseFloat(gp).toFixed(0)
            chemg.innerHTML=parseFloat(gc).toFixed(0)
            mathg.innerHTML=parseFloat(gm).toFixed(0)
            biog.innerHTML=parseFloat(gb).toFixed(0)
            totalg.innerHTML=parseFloat(sumgg).toFixed(0)


            tota=percentagelan+perk+kann12+gk 
            tota1=percentagelan+pere+enggg12+ge 
            tota2=percentagemain+perp+phhy12+gp
            tota3=percentagemain+perc+chhem12+gc
            tota4=percentagemain+perm+maath12+gm
            tota5=percentagemain+perb+bioo12+gb
            tota6=sumgg+kann12+enggg12+phhy12+chhem12+maath12+bioo12+sum11c+percentagemain*4+(percentagelan*2)

            kantt.innerHTML=parseFloat(tota).toFixed(0)
            engtt.innerHTML=parseFloat(tota1).toFixed(0)
            phytt.innerHTML=parseFloat(tota2).toFixed(0)
            chemtt.innerHTML=parseFloat(tota3).toFixed(0)
            mathtt.innerHTML=parseFloat(tota4).toFixed(0)
            biott.innerHTML=parseFloat(tota5).toFixed(0)
            final.innerHTML=parseFloat(tota6).toFixed(0)


         var final2= (tota6*100)*0.001667
         finalpercentage.innerHTML=parseFloat(final2).toFixed(0)

            }
        
        
        }
    
    }

