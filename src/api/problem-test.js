import config from "config";
import axios from "axios";
import util from "../util/util.js";

const testAPI = {
    getProblemTests,
    createProblemTest,
    getProblemTestById,
    updateProblemTestById,
    deleteProblemTestById,
};

function getProblemTests(problemName) {
    return axios.get(`${config.apiUrl}/problems/${problemName}/tests`, 
        config.cors).then(res => res.data);
}

function getProblemTestById(problemName, testId) {
    return axios.get(`${config.apiUrl}/problems/${problemName}/tests/${testId}`, 
        config.cors).then(res => res.data);
}

function updateProblemTestById(problemName, testId, score, input, output) {
    return axios.put(`${config.apiUrl}/problems/${problemName}/tests/${testId}`, {
        score: parseInt(score),
        input: util.stringToByteArray(input),
        output: util.stringToByteArray(output),
    }, config.cors).then(res => res.data);
}

function deleteProblemTestById(problemName, testId) {
    return axios.delete(`${config.apiUrl}/problems/${problemName}/tests/${testId}`
        ,config.cors).then(res => res.data);
}

function createProblemTest(problemName, score, input, output) {
    console.log(util);
    return axios.post(`${config.apiUrl}/problems/${problemName}/tests`, {
        score: parseInt(score),
        input: util.stringToByteArray(input),
        output: util.stringToByteArray(output),
    }, config.cors).then(res => res.data);
}

export default testAPI;