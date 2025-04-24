import { FirestoreService } from './firestore_service.js';

async function CallFirestore(communityId,usersId) {
     
    const firestore = new FirestoreService("Communities/"+communityId+"/Users/"+usersId+"/Posts/");
    return firestore;

}

document.getElementById("addDocBtn").addEventListener("click", async () => {
    const getCommunityId = document.getElementById("communityId").value.trim();
    const getUserId = document.getElementById("userId").value.trim();

    const firestore = await CallFirestore(getCommunityId, getUserId);

    const type = document.getElementById("type").value.trim();
    const likes = document.getElementById("likes").value.trim();
    const status = document.getElementById("status").value.trim();
    const publishedAt = document.getElementById("publishedAt").value.trim();
    const getPublished = publishedAt ? parseInt(publishedAt) : null;
    

    if (!type || !likes || !status || !getPublished) {
        alert("Fill in the required fields: type, likes, status and publishedAt.");
        return;
    }

    const data = {
        type,
        likes,
        status,
        getPublished: isNaN(getPublished) ? null : getPublished 
    };

    await firestore.PostDocument(getUserId, data);
});