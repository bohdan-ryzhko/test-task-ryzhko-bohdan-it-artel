import fs from 'fs-promise'

async function printFiles () {
	const files = await getFilePaths() // Assume this works fine

	// files.forEach(async (file) => {
	// 	const contents = await fs.readFile(file, 'utf8')
	// 	console.log(contents)
	// })

	return Promise.all(files.map(async file => await fs.readFile(file, 'utf8')));
}

/* Схема обробки функції printFiles, так як вона асинхронна, 
вона повертає проміс, в нашому випадку, проміс з масивом, 
який ми оброблюємо методами then and catch
*/
printFiles()
	.then(readerFiles => { /* readerFiles - це буде масив з прочитаних файлів */
		if (!readerFiles === 0) throw new Error(readerFiles);

		readerFiles.forEach(file => console.log(file));
	})
	.catch(error => console.log(error));
