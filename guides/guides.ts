import * as ejs from 'ejs'
import * as fse from 'fs-extra'
import { lstatSync, readdirSync, writeFileSync, writeFile } from 'fs'
import { join } from 'path'

const guides: { name: string; title: string; iframeSrc: string }[] = [
    { name: 'sounders-game-day', title: "Benti's Sounders Guide", iframeSrc: 'https://docs.google.com/document/d/e/2PACX-1vQsBnqALmffNgdFyVgojKtz3zGZ-Km-FugIaLUUQ-9hG_R8qKb-x5w04mFTQfzb0zmIwWklpBGfVi2s/pub?embedded=true' },
    { name: 'seattle', title: "Benti's Seattle Guide", iframeSrc: "https://docs.google.com/document/d/e/2PACX-1vTsS9eBsfCV6QePY1qBwSOTKNVcNf8UrvzoRjW_z72Xu7VgqWqm9R9bR9gCrlFZMvW03P4wisUBiqQF/pub?embedded=true" },
    { name: 'sf', title: "Benti's SF Guide", iframeSrc: "https://docs.google.com/document/d/e/2PACX-1vT8qBXEtmqx4yj3fNHyB1gMz1BmUsM1FHsXZdnIXOcNTiJXz3KtcKZ1s2FmiC5EAkLdxo97ACSOjjqb/pub?embedded=true" },
    { name: 'sd', title: "Benti's San Diego Guide", iframeSrc: "https://docs.google.com/document/d/e/2PACX-1vTKvaNUMQ4omcObYEq077i8PbfL4iDvOBjuVrVgAIaXcqpAbMzJhuZJat2Y51wXqKvVCsSfXE2t_kYn/pub?embedded=true" },
    { name: 'nashville', title: "Benti's Nashville Guide", iframeSrc: "https://docs.google.com/document/d/e/2PACX-1vQPnOaYeLdfTHF4rv64Q71qfn-pF6GQrwhiphFLYpZh6ekS-KtZ1_GsDKyZ1tc9J43uaA1Btkppy4-2/pub?embedded=true" },
]

function clean() {
    const isDirectory = source => lstatSync(source).isDirectory()
    const getDirectories = source =>
        readdirSync(source).map(name => join(source, name)).filter(isDirectory)

    getDirectories('./').filter(x => x !== 'node_modules').map(x => { fse.emptyDirSync(x); fse.rmdirSync(x) })
}

async function writeGuides() {
    guides.forEach(async ({ title, iframeSrc, name }) => {
        const template = ejs.renderFile('./_layout.ejs', {
            title,
            iframeSrc,
        })
        fse.mkdirSync(`./${name}`)
        writeFileSync(`./${name}/index.html`, await template, 'utf8');
    })

    const template = ejs.renderFile('./_list.html', {
        list: guides.map(guide => `<a href="./${guide.name}">${guide.title}</a>`)
    })
    writeFileSync('./index.html', await template, 'utf8')
}


clean();
writeGuides();