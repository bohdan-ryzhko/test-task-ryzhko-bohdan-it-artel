import fs from 'fs-promise';

const contentCb = async file => await fs.readFile(file, 'utf8');

async function printFiles () {
	const files = await getFilePaths() // Assume this works fine

	// files.forEach(async (file) => {
	// 	const contents = await fs.readFile(file, 'utf8')
	// 	console.log(contents)
	// })

	return Promise.all(files.map(contentCb));
}

/* Схема обробки функції printFiles, так як вона асинхронна, 
вона повертає проміс, в нашому випадку, проміс з масивом, 
який ми оброблюємо методами then and catch
*/
printFiles()
	.then(readerFiles => { /* readerFiles - це буде масив з прочитаних файлів */
		if (readerFiles.length === 0) throw new Error(readerFiles);

		readerFiles.forEach(file => console.log(file));
	})
	.catch(error => console.log(error));
