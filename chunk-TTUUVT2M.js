function d(r,c,n,t){let o=r.clone(),l=1<<o.level,e=o.col+c,w=o.row+n;return t&&e<0?(o.col=e+l,o.world-=1):e>=l?(o.col=e-l,o.world+=1):o.col=e,o.row=w,o}export{d as a};
