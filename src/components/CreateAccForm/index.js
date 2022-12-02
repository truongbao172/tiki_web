import React from 'react'
import "./styles.scss"
function CreateAccForm() {
    const listInterests = ["Baby", "Cooking", "Crafting", "Decorating", "Electronics", "Fashion & Style", "Interior Design & Furniture", "Games", "Lighting", "Music", "Outdoors", "Parenting", "Pets", "Sports", "Travel", "Arts & Culture", "Movies & TV", "Food & Wine", "Health & Fitness", "Volunteering",];
    const listClassify = ["Traditional",
        "Rustic",
        "Modern",
        "Contemporary",
        "Coastal",
        "Vintage",
        "Bohemian"]
    const listRelate = ["Occasional Party Thrower",
        "Frequent Entertainer",
        "Backyard Griller",
        "Family Oriented",
        "Backyard Enthusiast",
        "Gardener"]

    const listSources = ["Search engines/apps (Google, Bing, Yahoo, etc.)",
        "Retailers' websites/apps (i.e. Amazon.com, Walmart.com, Target.com)",
        "Social media (i.e. Facebook, Pinterest, Instagram, Snapchat, Twitter)",
        "Video sites/apps (i.e. YouTube, Vimeo)",
        "Publishers' and aggregator websites/apps (i.e. BuzzFeed, Reddit, Huffington Post, People, News sites)",
        "Magazines",
        "Websites/apps for product brands",
        "Television shows",
        "Radio shows or podcasts",
        "Blogs",
        "Other mobile apps",
        "Newspapers",]
    const renderListInterests = (data) => {
        return <>
            <label htmlFor="">What are your interests?</label>
            {
                data.map((val, index) => {
                    return <div>
                        <input type="checkbox" name="interests[]" id={`interests-option-${index}`} defaultValue={val} />{val}
                    </div>
                })
            }
        </>
    }

    const renderClassify = (data) => {
        return <>
            <label htmlFor="">How would you classify your style?</label>
            {
                data.map((val, index) => {
                    return <div>
                        <input type="checkbox" name="style[]" id={`style-option-${index}`} defaultValue={val} />{val}
                    </div>

                })
            }
        </>
    }
    const renderRelate = (data) => {
        return <>
            <label htmlFor="">To which of the following do you relate?</label>
            <div className="control">
                {
                    data.map((val, index) => {
                        return <div>
                            <input type="checkbox" name="relate[]" id={`relate-option-${index}`} defaultValue={val} />{val}
                        </div>
                    })
                }
            </div>
        </>
    }
    const renderSources = (data) => {
        return <>
            <label htmlFor="">What are your top sources for information and inspiration about outdoor entertaining?</label>
            <div className="control">
                {
                    data.map((val, index) => {
                        return <div>
                            <input type="checkbox" name="sources_of_info[]" id={`sources_of_info-option-${index}`} defaultValue={val} />{val}
                        </div>
                    })
                }
            </div>
        </>
    }
    return (
        <div id="create_acc_form" className='text-left'>
            <form>
                <div className='info'>
                    <legend className='form_title'>
                        Personal Information
                    </legend>
                    <div className="form-group field">
                        <label>First Name <span className='doc'>*</span></label>
                        <input placeholder="First Name" type="text" className="form-control" />
                    </div>
                    <div className="form-group field">
                        <label>Last Name <span className='doc'>*</span></label>
                        <input placeholder="Last Name" type="text" className="form-control" />
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
                        {
                            renderListInterests(listInterests)
                        }
                    </div>
                    <div className="form-group field">
                        {
                            renderClassify(listClassify)
                        }
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
                        {renderRelate(listRelate)}
                    </div>
                    <div className="form-group field">
                        {renderSources(listSources)}
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