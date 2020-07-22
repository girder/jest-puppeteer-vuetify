// This filename is not magic; it is referenced by Jest's setupFilesAfterEnv

// this shortens the page.waitForXPath timeout, which is what the jest helper uses
page.setDefaultTimeout(1000);