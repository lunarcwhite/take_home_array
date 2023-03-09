let binatang = ['kucing', 'ayam', 'buaya']

function tambahData(data)
{
    binatang.push(data)
    console.log(binatang);
}
//tambahData('iguana')

function ambilData(index)
{
    console.log(binatang[index])
}
//ambilData(1)

function gantiNilai(index, data)
{
    binatang[index] = data
    console.log(binatang);
}
gantiNilai(0, 'harimau')

