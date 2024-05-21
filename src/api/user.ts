import request from "@/utils/request";
import {RES} from "@/types";

export const login = <T>(data): Promise<RES<T>> => {
    return request({
        url: `/admin/user/login`,
        method: 'POST',
        data
    })

}

/**
 * 获取用户分页列表
 * @param data
 */
export const getUserPage = <T>(data): Promise<RES<T>> => {
    return request({
        url: '/admin/user/searchUser',
        method: 'POST',
        data
    })
}

/**
 * 修改用户信息
 * @param data
 */
export const updateUser = <T>(data): Promise<RES<T>> => {
    return request({
        url: '/admin/user/updateUser',
        method: 'POST',
        data
    });
}

/**
 * 查询角色
 * @param data
 */
export const queryRole = <T>():Promise<RES<T>> => {
    return request({
        url: '/admin/role/queryRole',
        method: 'POST',
    })
}

/**
 *  添加用户
 * @param data
 */
export const addUser =<T>(data):Promise<RES<T>> => {
    return request({
        url: '/admin/user/add',
        method: 'POST',
        data
    });
}

