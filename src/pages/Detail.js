import React from 'react'
import '../css/detail.scss'
function Detail() {
  return (
    <div className='app'>
          <div className='headbar'>
            <div className='headerbar-icons'>
                  <i class="fa-brands fa-affiliatetheme"></i>
                 <i class="fa-brands fa-adn"></i>
                 <i class="fa-solid fa-address-book"></i>
            </div>
          </div>
          <div className='content'>
                  <div className='infor'>
                        <div className='infor-title'>Channel name</div>
                        <div className='info-text'>Activity Title Name Make it Longer May Longer than One Line</div>
                        <div className='info-user'>
                              <img  className='info-user-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHWhT2_mjOiym3UUxFPfTmxg3PnNiSa96nQ&usqp=CAU" alt=""  />
                              <div className='info-user-container'>
                                      <div className='info-user-name'>Username</div>
                                      <div className='info-user-activity'>Published 2 days ago</div>
                              </div>
                        </div>
                      
                  </div>
                  <hr />
                  <div className='container-redirect'>
                          <div className='redirect-child--active'><i class="fa-solid fa-sitemap"></i>Details</div>
                          <div className='redirect-child'><i class="fa-solid fa-baby-carriage"></i>Participants</div>
                          <div className='redirect-child'><i class="fa-solid fa-baby-carriage"></i>Comments</div>
                  </div>
                  <hr />
                  
          </div>
          <div className='main'>
                <div className='main-image-list'>
                      <img  className='main-image-item' src="https://vcdn1-dulich.vnecdn.net/2021/05/18/VnExpress-MauSon-10-1621330131.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=vcgUl191emOhjwo1IzIDQw" alt="" />
                      <img  className='main-image-item' src="https://vcdn1-dulich.vnecdn.net/2021/05/18/VnExpress-MauSon-10-1621330131.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=vcgUl191emOhjwo1IzIDQw" alt="" />
                </div>
                <div className='main-text'>          
                      [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed,
                       gravida leo. In dictum mauris vel augue varius there is south north asim   
                       <button className='main-button'>
                         View All
                        </button>    
                </div>
                <hr />
                <div className='when'>
                  <div className='when-title'>When</div>
                  <div className='when-time'>
                        <div className='when-time-left'>
                              <i class="fa-solid fa-circle-info"></i>15 April 2015
                        <div className='when-time-hour'>8:30 <span>am</span></div>
                        </div>
                        <div className='when-time-right'><i class="fa-solid fa-circle-info"></i>15 April 2015</div>
                  </div>

                </div>
                <hr />
                <div className='where'>
                  <div className='where-title'>Where</div>
                  <div className='where-contain'>
                        <div className='where-contain-head'>Marina Bay Sands</div>
                        <div className='where-contain-body'>10 Bayfront Ave, S018956</div>
                        <img src="./assets/gmap.png" alt=""  className='where-contain-map'/>
                  </div>
                </div>
                <hr />
                <div className='flex-going'>
                        <div className='text-going'><i class="fa-brands fa-42-group"></i><span>34 going</span></div>
                        <div className='flex-going-img-container'>
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-going-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
   
                        </div>
                </div>
                <hr />
                <div className='flex-likes'>
                        <div className='text-likes'><i class="fa-brands fa-42-group"></i><span>34 likes</span></div>
                        <div className='flex-likes-img-container'>
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              <img className='flex-likes-img' src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
   
                        </div>
                </div>
                <hr />
                <div className='container-comments'>
                        <div className='comment'>
                              <div className='comment-left'>
                                    <img src="https://u01.appmifile.com/images/2017/03/28/937cc936-a582-4b46-8f28-090935f62a51.jpeg" alt="" />
                              </div>
                              <div className='comment-center'>
                                    <div className='comment-center-top'>Little Prince <span>9 hour ago</span></div>
                                    <div className='comment-center-body'>Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum</div>
                              </div>
                              <div className='comment-right'>
                                    <i class="fa-solid fa-infinity"></i>
                              </div>
                        </div>
                        <div className='comment'>
                              <div className='comment-left'>
                                    <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2015/07/3095742_image.jpg" alt="" />
                              </div>
                              <div className='comment-center'>
                                    <div className='comment-center-top'>Little Prince <span>9 hour ago</span></div>
                                    <div className='comment-center-body'>Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum</div>
                              </div>
                              <div className='comment-right'>
                                    <i class="fa-solid fa-infinity"></i>
                              </div>
                        </div>
                        <div className='comment'>
                              <div className='comment-left'>
                                    <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2015/07/3095742_image.jpg" alt="" />
                              </div>
                              <div className='comment-center'>
                                    <div className='comment-center-top'>Little Prince <span>9 hour ago</span></div>
                                    <div className='comment-center-body'>Petus lacus, commodo!!</div>
                              </div>
                              <div className='comment-right'>
                                    <i class="fa-solid fa-infinity"></i>
                              </div>
                        </div>
                        <div className='comment'>
                              <div className='comment-left'>
                                    <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2015/07/3095742_image.jpg" alt="" />
                              </div>
                              <div className='comment-center'>
                                    <div className='comment-center-top'>Little Prince <span>9 hour ago</span></div>
                                    <div className='comment-center-body'>Petus lacus, commodo!!</div>
                              </div>
                              <div className='comment-right'>
                                    <i class="fa-solid fa-infinity"></i>
                              </div>
                        </div>
                        <div className='comment'>
                              <div className='comment-left'>
                                    <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2015/07/3095742_image.jpg" alt="" />
                              </div>
                              <div className='comment-center'>
                                    <div className='comment-center-top'>Little Prince <span>9 hour ago</span></div>
                                    <div className='comment-center-body'>Petus lacus, commodo!!</div>
                              </div>
                              <div className='comment-right'>
                                    <i class="fa-solid fa-infinity"></i>
                              </div>
                        </div>
                </div>
                {/* button end */}
                
             

            
          </div>
          <div className='footer'>
                      <button className='btn-footer-left'><i class="fa-solid fa-question"></i><i class="fa-solid fa-virus-covid"></i></button>
                      <button className='btn-footer-right'><i class="fa-solid fa-xmark"></i>Join</button>
                </div>
        

    </div>
  )
}

export default Detail