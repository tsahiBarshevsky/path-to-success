import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB9SbtkRVYNYiobXxJbv8IiFUPDQ9ayl5E",
    authDomain: "path-to-susccess.firebaseapp.com",
    projectId: "path-to-susccess",
    storageBucket: "path-to-susccess.appspot.com",
    messagingSenderId: "267627451871",
    appId: "1:267627451871:web:b88a78a8c0a2cf8b74606a"
};

class Firebase
{
    constructor()
    {
        app.initializeApp(firebaseConfig);
        //this.auth = app.auth();
        //this.db = app.firestore();
        this.storage = app.storage();
    }

    async getAllCourses(year)
    {
        var sorted = [];
        const snapshot = await app.firestore().collection(`${year}`).get();
        snapshot.docs.map(doc => sorted.push(doc.data()));
        return sorted.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    }
}

export default new Firebase();