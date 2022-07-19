const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
    lost: false
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    lost: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    lost: false
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    lost: false
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    lost: false
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    lost: false
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    lost: false
}
]

function lostPackage() {
    let packageLost = packages[Math.floor(Math.random() * packages.length)]
    console.log(`lost`, packageLost);
    packageLost.lost = true
}
lostPackage()


let currentPackage = packages


function drawPackages() {
    let template = ''
    currentPackage.forEach(p => template += `<div class="card col-6 btn p-1 m-1 text-center" onclick="missingPackage()">TO: ${p.to} | ID: ${p.trackingNumber}</div>`)
    let packageElem = document.getElementById('packages')
    // console.log(packageElem, template);
    packageElem.innerHTML = template
}
drawPackages()

function missingPackage(lostPackage) {
    let missing = packages.find(p => p.lost == true)
    if (missing == true) {
        window.alert(`PACKAGE FOUND!`)
    } else {
        window.alert(`WRONG`)
    }
}

function heavy() {
    currentPackage = currentPackage.filter(p => p.heavy == true)
    drawPackages()
}

function priority() {
    currentPackage = currentPackage.filter(p => p.priority == true)
    drawPackages()
}

function fragile() {
    currentPackage = currentPackage.filter(p => p.fragile == true)
    drawPackages()
}

function trackingNumber() {
    currentPackage = currentPackage.filter(p => p.trackingNumber == undefined)
    drawPackages()
}