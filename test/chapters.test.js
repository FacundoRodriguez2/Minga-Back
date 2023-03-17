import app from "../app.js"
import chai from "chai";
import request from "supertest";

const assert = chai.assert
const expect = chai.expect

describe('chapters test', () => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTQ5YjRjODhiMjNlYjJlNTNjMDlmNCIsImlhdCI6MTY3OTA3MjEzOCwiZXhwIjoxNjc5MTU4NTM4fQ.UYkJB_FPhydGor6ZFUc9myl-mC909Kd7szlcOctnXfs"

    it ('POST api/chapters verificar que pages es un array de strings', async () => {
       
        const chapter = {
            manga_id: "641077cab9d886c21a7b42ed",
            title: "test #4",
            pages: [  "https://i.postimg.cc/DwQKszB9/alice-in-borderland-008-01.jpg", "https://i.postimg.cc/wB6Ykdr7/alice-in-borderland-008-02.jpg", "https://i.postimg.cc/vm3FqNRX/alice-in-borderland-008-03.jpg", "https://i.postimg.cc/XJPM3BYC/alice-in-borderland-008-04.jpg", "https://i.postimg.cc/d3Zb0QhS/alice-in-borderland-008-05.jpg", "https://i.postimg.cc/4nCrHCt4/alice-in-borderland-008-06.jpg", "https://i.postimg.cc/gcwjhvR1/alice-in-borderland-008-07.jpg", "https://i.postimg.cc/sXxFt4sz/alice-in-borderland-008-08.jpg", "https://i.postimg.cc/J79n5G50/alice-in-borderland-008-09.jpg", "https://i.postimg.cc/Nfm0JBd4/alice-in-borderland-008-10.jpg", "https://i.postimg.cc/1z5536sC/alice-in-borderland-008-11.jpg", "https://i.postimg.cc/HLZWcxLp/alice-in-borderland-008-12.jpg", "https://i.postimg.cc/vBCQhN9k/alice-in-borderland-008-13.jpg", "https://i.postimg.cc/MZjZHzJS/alice-in-borderland-008-14.jpg", "https://i.postimg.cc/nr7nPGGz/alice-in-borderland-008-15.jpg", "https://i.postimg.cc/TYMdWBTW/alice-in-borderland-008-16.jpg", "https://i.postimg.cc/dVnwp1r8/alice-in-borderland-008-17.jpg", "https://i.postimg.cc/ZqR4SSxX/alice-in-borderland-008-18.jpg", "https://i.postimg.cc/D0VTLb3K/alice-in-borderland-008-19.jpg"],
            order: 15
        }

        expect(chapter.pages).to.be.a('array');
        chapter.pages.forEach(page => assert.isString(page))
        
        const response = await request(app)
        .post("/api/chapters")
        .send(chapter)
        .auth(token, {type: "bearer"})
        
    })
  
})


