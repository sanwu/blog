import Tool from '../../pub/Tool';

let indexApi = {
	selectNav: Tool.resource('GET', 'json/menu.json', {})
}

const BASE_MENU = 'BASE_MENU';

export let OnSelectMenu= (state) => {
    return { type: BASE_MENU, state }
}
export function selectMenu(reddit?:any) {
    return (dispatch, getState) => {
        indexApi.selectNav.then(function(data) {
            dispatch(OnSelectMenu(data));
        });
    }
}