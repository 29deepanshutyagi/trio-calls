var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axiosFetch from "./axios.fetch";
export const getAllMeets = (UID) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        return axiosFetch
            .post("/getAllMeet", {
            UID,
        })
            .then((res) => {
            if (res.status === 200) {
                resolve(res.data.meets);
            }
            else
                reject(res.data.message);
        });
    });
});
export const getChat = (UID, meetID) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        return axiosFetch
            .post("/getChat", {
            UID,
            meetID,
        })
            .then((res) => {
            if (res.status === 200) {
                resolve(res.data);
            }
            else
                reject(res.data.message);
        });
    });
});
