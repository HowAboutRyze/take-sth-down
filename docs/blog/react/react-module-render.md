---
tags:
- react
abstract: 为react各模块进行上下线、顺序的动态配置的思路。
---

# React模块配置型渲染

<TagGroup/>

## 场景需求

1. 页面中有 CompA、CompB、CompC 三个模块，可动态配置模块是否上线；
2. 可配置每个模块的顺序；
3. 模块仍可传入参数。



## 设计思路

1. 将组件及其配置项放入组件数组中进行管理；
2. 对组件数组按组件顺序进行排序；
3. 利用 react state 更新状态渲染组件。



## 代码

```jsx
import React from 'react';
import CmpA from './cmp_a';
import CmpB from './cmp_b';
import CmpC from './cmp_c';
class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleList: [],
        };
    }
    componentDidMount() {
        this.initModules();
    }
    // 初始化各模块
    initModules = () => {
        const {
            AOnline,
            AOrder,
            BOnline,
            BOrder,
            COnline,
            COrder,
        } = this.props.moduleConf;
        const defaultList = [
            {
                component: CmpA,
                online: AOnline,
                order: AOrder || 11,
            },
            {
                component: CmpB,
                online: BOnline,
                order: BOrder || 12,
            },
            {
                component: CmpC,
                online: COnline,
                order: COrder || 13,
            },
        ];
        // 模块排序，order越小越靠前
        this.setState({
            moduleList: defaultList.sort((a, b) => a.order - b.order)
        });
    }
    // 模块渲染
    handleRenderModules = (comp, index) => {
        if (!comp.online) {
            return null;
        }
        return this.handleRenderComp(comp.component, index);
    }
    // 组件渲染
    handleRenderComp = (Comp, index, props = {}) => {
        return <Comp key={index} {...props} />
    }
    render() {
        const { moduleList } = this.state;
        return (
        	<div>
            	{moduleList.length > 0 && moduleList.map(this.handleRenderModules)}
            </div>
        )
    }
}
```

<Gitalk/>