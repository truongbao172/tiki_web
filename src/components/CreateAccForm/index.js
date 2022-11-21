import React from 'react'
import "./styles.scss"
function CreateAccForm() {
    return (
        <div id="create_acc_form" className='text-left'>
            <form>
                <div className='info'>
                    <legend className='form_title'>
                        Personal Information
                    </legend>
                    <div className="form-group field">
                        <label>First Name <span className='doc'>*</span></label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group field">
                        <label>Last Name <span className='doc'>*</span></label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group field">
                        <input type="checkbox" id="exampleCheck1" />
                        <span className="form-check-label" htmlFor="exampleCheck1">Sign Up for TIKI Email</span>
                    </div>
                    <div className="form-group field">
                        <label >What is your birthday?</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group field">
                        <label htmlFor="exampleFormControlSelect1">Which gender do you identify with?</label>
                        <select className="form-select" aria-label="">
                            <option value={1}></option>
                            <option value={2}>Male</option>
                            <option value={3}>Female</option>
                            <option value={4}>Not Specified</option>
                        </select>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="exampleFormControlSelect2">What is your household size (including you)?</label>
                        <select className="form-select" aria-label="">
                            <option value={1}></option>
                            <option value={2}>1</option>
                            <option value={3}>2</option>
                            <option value={4}>3</option>
                            <option value={5}>4</option>
                            <option value={6}>5</option>
                            <option value={7}>6+</option>
                        </select>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="">Which of the following are in your household?</label>
                        <div>
                            <input type="checkbox" name="household[]" id="household-option-2" defaultValue={100} />Children ages 0-10
                        </div>
                        <div>
                            <input type="checkbox" name="household[]" id="household-option-2" defaultValue={100} />Children ages 11-18
                        </div>
                        <div>
                            <input type="checkbox" name="household[]" id="household-option-2" defaultValue={100} />Dog(s)
                        </div>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="exampleFormControlSelect3">Do you rent or own?</label>
                        <select className="form-select" aria-label="">
                            <option value={1}></option>
                            <option value={2}>Rent</option>
                            <option value={3}>Own</option>
                        </select>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="">What are your interests?</label>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-1" defaultValue={118} />Baby
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-2" defaultValue={118} />Cooking
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-3" defaultValue={118} />Crafting
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-4" defaultValue={118} />Decorating
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-5" defaultValue={118} />Electronics
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-6" defaultValue={118} />Fashion & Style
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-7" defaultValue={118} />Interior Design & Furniture
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-8" defaultValue={118} />Games
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-9" defaultValue={118} />Lighting
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-10" defaultValue={118} />Music
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-11" defaultValue={118} />Outdoors
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-12" defaultValue={118} />Parenting
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-13" defaultValue={118} />Pets
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-14" defaultValue={118} />Sports
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-15" defaultValue={118} />Travel
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-16" defaultValue={118} />Arts & Culture
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-17" defaultValue={118} />Movies & TV
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-18" defaultValue={118} />Food & Wine
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-19" defaultValue={118} />Health & Fitness
                        </div>
                        <div>
                            <input type="checkbox" name="interests[]" id="interests-option-20" defaultValue={118} />Volunteering
                        </div>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="">How would you classify your style?</label>
                        <div className="control">
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-2" defaultValue={175} />Traditional</div>
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-3" defaultValue={178} />Rustic</div>
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-4" defaultValue={181} />Modern</div>
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-5" defaultValue={184} />Contemporary</div>
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-6" defaultValue={187} />Coastal</div>
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-7" defaultValue={190} />Vintage</div>
                            <div>
                                <input type="checkbox" name="style[]" id="style-option-8" defaultValue={193} />Bohemian</div>
                        </div>
                    </div>
                    <div classname="form-group field">
                        <label htmlfor="exampleFormControlSelect4">On average, how many outdoor torches do you buy each year?</label>
                        <select className="form-select field" id="torches_per_year" name="torches_per_year">
                            <option value selected="selected"> </option>
                            <option value={268}>0</option>
                            <option value={271}>1-2</option>
                            <option value={274}>3-5</option>
                            <option value={277}>6-9</option>
                            <option value={280}>10+</option>
                        </select>
                    </div>
                    <div classname="form-group field">
                        <label htmlfor="exampleFormControlSelect5">During what times of year do you use your outdoor torches?</label>
                        <select className="form-select field" id="time_of_year" name="time_of_year">
                            <option value selected="selected"> </option>
                            <option value={283}>Mostly Spring</option>
                            <option value={286}>Mostly Summer</option>
                            <option value={289}>Spring and Summer</option>
                            <option value={292}>Spring, Summer, and Fall</option>
                            <option value={295}>All year</option>
                        </select>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="">To which of the following do you relate?</label>
                        <div className="control">
                            <div>
                                <input type="checkbox" name="relate[]" id="relate-option-2" defaultValue={298} />Occasional Party Thrower</div>
                            <div>
                                <input type="checkbox" name="relate[]" id="relate-option-3" defaultValue={301} />Frequent Entertainer</div>
                            <div>
                                <input type="checkbox" name="relate[]" id="relate-option-4" defaultValue={304} />Backyard Griller</div>
                            <div>
                                <input type="checkbox" name="relate[]" id="relate-option-5" defaultValue={307} />Family Oriented</div>
                            <div>
                                <input type="checkbox" name="relate[]" id="relate-option-6" defaultValue={310} />Backyard Enthusiast</div>
                            <div>
                                <input type="checkbox" name="relate[]" id="relate-option-7" defaultValue={313} />Gardener</div>
                        </div>
                    </div>
                    <div className="form-group field">
                        <label htmlFor="">What are your top sources for information and inspiration about outdoor entertaining?</label>
                        <div className="control">
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-2" defaultValue={316} />Search engines/apps (Google, Bing, Yahoo, etc.)</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-3" defaultValue={319} />Retailers' websites/apps (i.e. Amazon.com, Walmart.com, Target.com)</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-4" defaultValue={322} />Social media (i.e. Facebook, Pinterest, Instagram, Snapchat, Twitter)</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-5" defaultValue={325} />Video sites/apps (i.e. YouTube, Vimeo)</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-6" defaultValue={328} />Publishers' and aggregator websites/apps (i.e. BuzzFeed, Reddit, Huffington Post, People, News sites)          </div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-7" defaultValue={331} />Magazines</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-8" defaultValue={334} />Websites/apps for product brands</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-9" defaultValue={337} />Television shows</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-10" defaultValue={340} />Radio shows or podcasts</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-11" defaultValue={343} />Blogs</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-12" defaultValue={346} />Other mobile apps</div>
                            <div><input type="checkbox" name="sources_of_info[]" id="sources_of_info-option-13" defaultValue={349} />Newspapers</div>
                        </div>
                    </div>
                    <div className="mb-3 field">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Please list some of your favorite sources for outdoor entertaining news and trends.</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
                    </div>
                </div>
                <div className='account mt-5'>
                    <div className='form_title'>
                        Sign-in Information
                    </div>
                    <div>
                        <div className='field'>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email <span className='doc'>*</span></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className='field'>
                            <label htmlFor="exampleInputPassword1" className="form-label">Password  <span className='doc'>*</span></label>
                            <input type="password" name="password" id="password" title="Password" className="form-control" data-password-min-length={8} data-password-min-character-sets={3} data-validate="{required:true, 'validate-customer-password':true}" autoComplete="off" aria-required="true" aria-autocomplete="list" />
                        </div>
                        <div className='field'>
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password  <span className='doc'>*</span></label>
                            <input type="password" name="password_confirmation" title="Confirm Password" id="password-confirmation" className="form-control" data-validate="{required:true, equalTo:'#password'}" aria-required="true" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn_oran my-3">Create an Account</button>
            </form>
        </div>
    );
}

export default CreateAccForm