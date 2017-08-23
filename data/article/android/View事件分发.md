### View事件分发

ViewGroup相关的事件有三个方法：dispatchTouchEvent、onInterceptTouchEvent、onTouchEvent;View相关的事件有两个方法：dispatchTouchEvent、onTouchEvent。
- `public boolean dispatchTouchEvent(MotionEvent ev)`    
  用来进行事件分发，返回结果手挡但钱View的onTouchEvent和下级View的dispatchTouchEvent方法的影响，表示是否消耗当前事件。
- `public boolean onInterceptTouchEvent(MotionEvent ev)`    
  用来判断是否拦截某个事件，如果当前View拦截了某个事件，那么同一个事件序列中，当前View无法再次接收到事件。
- `public boolean onTouchEvent(MotionEvent event)`    
  用来处理点击事件。

它们之间的具体关系可以用如下伪代码表示：
```
    public boolean dispatchTouchEvent(MotionEvent ev) {
        boolean consume = false;
        if (onInterceptTouchEvent(ev)) {
            consume = onTouchEvent(ev);
        } else {
            consume = child.dispatchTouchEvent(ev);
        }
        return consume;
    }

```

对于一个根ViewGroup来说，点击事件产生后，首先会传递给它，这时它的dispatchTouchEvent就会被调用，如果这个ViewGroup的onInterceptTouchEvent方法返回true就表示它要拦截当前事件，接着事件就会交给这个ViewGroup处理，即它的onTouchEvent方法会被调用；如果这个ViewGroup的onInterceptTouchEvent返回false就表示它不拦截当前事件，这时就会传递给它的子元素，接着子元素的dispatchTouchEvent方法就会被调用，如此反复直到事件最终被处理。

### 滑动冲突处理
- 如果父容器需要此事件就拦截，如果不需要就不拦截。ACTION_DOWN这个事件父容器必须返回false,否则事件无法传递个子元素
```
    public boolean onInterceptTouchEvent(MotionEvent ev) {
        boolean intercepted = false;
        int x = (int) ev.getX();
        int y = (int) ev.getY();
        switch (ev.getAction()) {
            case MotionEvent.ACTION_DOWN:
                intercepted = false;
                break;
            case MotionEvent.ACTION_MOVE:
                if (父容器需要当前事件) {
                    intercepted = true;
                } else {
                    intercepted = false;
                }
                break;
            case MotionEvent.ACTION_UP:
                intercepted = false;
                break;
            default:
                break;
        }
        mLastXIntercept = x;
        mLastYIntercept = y;

        return intercepted;
    }
```
- 父容器不拦截任何事件，所有的事件都传递给子元素，如果子元素需要此事件就直接消耗掉，否则就交由父容器进行处理，需要配合requestAllowDispatchTouchEvent方法，需要重写dispatchTouchEvent方法
```
    public boolean dispatchTouchEvent(MotionEvent ev) {
        int x = (int) ev.getX();
        int y = (int) ev.getY();
        switch (ev.getAction()) {
            case MotionEvent.ACTION_DOWN:
                parent.requestDisallowInterceptTouchEvent(true);
                break;
            case MotionEvent.ACTION_MOVE:
                int deltaX = x - mLastX;
                int deltaY = y - mLastY;
                if (父容器需要当前事件) {
                    parent.requestDisallowInterceptTouchEvent(false);
                }
                break;
            case MotionEvent.ACTION_UP:
                break;
            default:
                break;
        }
        mLastX = x;
        mLastY = y;
        return super.dispatchTouchEvent(ev);
    }

```

### tips
- 通过 `requestDisallowInterceptTouchEvent`方法可以在子元素中干预父元素的事件分发过程，但ACTION_DOWN事件除外

### 参考资料

`Android开发艺术探索`