<?php

namespace App\Http\Controllers;


use App\Project;

/**
 * Class ProjectsController
 * @package App\Http\Controllers
 */
class ProjectsController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * Show All Projects
     */
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }

    /**
     * @return array
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'description' => 'required',
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description' => request('description'),
        ]);

        return ['message' => 'Project Created'];
    }
}
